import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4000;
const LEGAL_DATA_PATH = path.join(__dirname, 'src', 'data', 'legalData.js');

// Helper to read and parse legalData.js
function getLegalData() {
  try {
    const fileContent = fs.readFileSync(LEGAL_DATA_PATH, 'utf-8');
    const match = fileContent.match(/export const LEGAL_DATA = ([\s\S]*?);$/m);
    if (match && match[1]) {
      const dataObj = new Function(`return ${match[1]}`)();
      return dataObj;
    }
  } catch (err) {
    console.error('Erro ao ler legalData.js:', err);
  }
  return {
    civil: { leis_normas: [], jurisprudencia: [] },
    penal: { leis_normas: [], jurisprudencia: [] },
    proc_penal: { leis_normas: [], jurisprudencia: [] },
    proc_civil: { leis_normas: [], jurisprudencia: [] },
    tributario_comercial: { leis_normas: [], jurisprudencia: [] },
    eleitoral: { leis_normas: [], jurisprudencia: [] },
    regulamentos: { leis_normas: [], jurisprudencia: [] }
  };
}

// Helper to write updated LEGAL_DATA back to legalData.js
function saveLegalData(data) {
  const SUBJECT_GROUPS_HEADER = `// Base de dados para Falcão - Estudos Jurídicos (Governo Federal RP / Nova Paraná RP)

export const SUBJECT_GROUPS = [
  {
    id: 'civil',
    title: 'Direito Civil',
    subtitle: 'Código Civil, Negócios Jurídicos, Obrigações e Direitos Reais',
    icon: 'Scale',
    color: '#2563eb',
    bgGradient: 'from-blue-500/10 to-indigo-500/5',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'penal',
    title: 'Direito Penal',
    subtitle: 'Código Penal, Infrações, Penas e Crimes contra a Administração',
    icon: 'Shield',
    color: '#dc2626',
    bgGradient: 'from-red-500/10 to-rose-500/5',
    borderColor: 'border-red-500/30'
  },
  {
    id: 'proc_penal',
    title: 'Direito Processual Penal',
    subtitle: 'Procedimentos Criminais, Inquéritos, Provas e Recursos',
    icon: 'Gavel',
    color: '#b91c1c',
    bgGradient: 'from-rose-600/10 to-red-600/5',
    borderColor: 'border-rose-500/30'
  },
  {
    id: 'proc_civil',
    title: 'Direito Processual Civil',
    subtitle: 'Código de Processo Civil, Tutelas, Execução e Prazos',
    icon: 'BookOpen',
    color: '#0284c7',
    bgGradient: 'from-sky-500/10 to-blue-500/5',
    borderColor: 'border-sky-500/30'
  },
  {
    id: 'tributario_comercial',
    title: 'Direito Tributário e Comercial',
    subtitle: 'Sistema Tributário Nacional, Impostos, Empresas e Contratos',
    icon: 'Building2',
    color: '#d97706',
    bgGradient: 'from-amber-500/10 to-yellow-500/5',
    borderColor: 'border-amber-500/30'
  },
  {
    id: 'eleitoral',
    title: 'Direito Eleitoral e Processual Eleitoral',
    subtitle: 'Legislação Eleitoral, Elegibilidade, Partidos e Processos TSE/TRE',
    icon: 'Vote',
    color: '#059669',
    bgGradient: 'from-emerald-500/10 to-teal-500/5',
    borderColor: 'border-emerald-500/30'
  },
  {
    id: 'regulamentos',
    title: 'Regulamentos Internos',
    subtitle: 'Regimentos do Governo Federal, Portarias ministeriais e Atos do Executivo',
    icon: 'Scroll',
    color: '#7c3aed',
    bgGradient: 'from-purple-500/10 to-violet-500/5',
    borderColor: 'border-purple-500/30'
  }
];\n\n`;

  const newContent = `${SUBJECT_GROUPS_HEADER}export const LEGAL_DATA = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(LEGAL_DATA_PATH, newContent, 'utf-8');
}

// Server logic
const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/api/data' && req.method === 'GET') {
    const data = getLegalData();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }

  if (url.pathname === '/api/add' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const newItem = JSON.parse(body);
        const { subjectId, sector, ...itemData } = newItem;

        if (!subjectId || !sector) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Matéria ou setor não informado.' }));
          return;
        }

        const data = getLegalData();
        if (!data[subjectId]) {
          data[subjectId] = { leis_normas: [], jurisprudencia: [] };
        }
        if (!data[subjectId][sector]) {
          data[subjectId][sector] = [];
        }

        if (!itemData.id) {
          itemData.id = `${subjectId}-${Date.now().toString(36)}`;
        }

        data[subjectId][sector].push(itemData);
        saveLegalData(data);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, item: itemData }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (url.pathname === '/api/delete' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { subjectId, sector, itemId } = JSON.parse(body);
        const data = getLegalData();

        if (data[subjectId] && data[subjectId][sector]) {
          data[subjectId][sector] = data[subjectId][sector].filter(i => i.id !== itemId);
          saveLegalData(data);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (url.pathname === '/api/git-push' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const { commitMessage } = JSON.parse(body || '{}');
        const msg = commitMessage || 'feat: adicionada nova norma via painel local';

        await execAsync('git add .');
        const { stdout: commitOut } = await execAsync(`git commit -m "${msg.replace(/"/g, '\\"')}"`);
        const { stdout: pushOut } = await execAsync('git push origin main');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, output: `${commitOut}\n${pushOut}` }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (url.pathname === '/' || url.pathname === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(getAdminHTML());
    return;
  }

  res.writeHead(404);
  res.end('Página não encontrada.');
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 GERENCIADOR LOCAL - FALCÃO ESTUDOS JURÍDICOS`);
  console.log(`==================================================`);
  console.log(`📌 Acesse no seu navegador: http://localhost:${PORT}`);
  console.log(`==================================================\n`);
  
  // Safe command execution with callback for opening browser on Windows
  exec(`start http://localhost:${PORT}`, () => {});
});

function getAdminHTML() {
  return `<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Painel de Gestão Local | Falcão Estudos Jurídicos</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #070c14; color: #f8fafc; }
    h1, h2, h3 { font-family: 'Cinzel', serif; }
  </style>
</head>
<body class="min-h-screen pb-12">
  
  <!-- Header -->
  <header class="border-b border-emerald-500/30 bg-slate-950/90 backdrop-blur sticky top-0 z-50 py-4 px-6">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 p-1 flex items-center justify-center">
          <img src="/governo_logo.png" alt="Logo" class="w-8 h-8 object-contain" onerror="this.style.display='none'">
        </div>
        <div>
          <h1 class="text-xl font-bold text-white tracking-wide">Painel Interno de Gestão</h1>
          <p class="text-xs text-emerald-400">Falcão Estudos Jurídicos • Nova Paraná RP</p>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button onclick="publishToGit()" id="gitPushBtn" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs shadow-lg transition">
          🚀 Fazer Commit e Push para GitHub
        </button>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <main class="max-w-6xl mx-auto px-4 mt-8">
    
    <!-- Status Notice -->
    <div id="alertBox" class="hidden mb-6 p-4 rounded-xl text-sm font-medium border"></div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Left Column: Form to Add New Norm -->
      <div class="lg:col-span-6 bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 shadow-xl">
        <h2 class="text-lg font-bold text-emerald-400 mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
          <span>📝 Cadastrar Nova Norma / Jurisprudência</span>
        </h2>

        <form id="normForm" onsubmit="handleFormSubmit(event)" class="space-y-4 text-xs">
          
          <!-- Subject Group Selection -->
          <div>
            <label class="block font-bold text-slate-300 mb-1">Matéria Jurídica *</label>
            <select id="subjectId" required class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
              <option value="civil">Direito Civil</option>
              <option value="penal">Direito Penal</option>
              <option value="proc_penal">Direito Processual Penal</option>
              <option value="proc_civil">Direito Processual Civil</option>
              <option value="tributario_comercial">Direito Tributário e Comercial</option>
              <option value="eleitoral">Direito Eleitoral e Processual Eleitoral</option>
              <option value="regulamentos">Regulamentos Internos</option>
            </select>
          </div>

          <!-- Sector Selection -->
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-300 mb-1">Setor *</label>
              <select id="sector" required onchange="toggleSectorFields()" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
                <option value="leis_normas">Leis e Normas</option>
                <option value="jurisprudencia">Jurisprudência</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-300 mb-1">Tipo de Documento *</label>
              <input type="text" id="type" placeholder="Ex: Lei Ordinária, Decreto, Súmula" required class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
            </div>
          </div>

          <!-- Number & Date -->
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-300 mb-1">Número / Identificador *</label>
              <input type="text" id="number" placeholder="Ex: Lei nº 10.406 / Súmula 05" required class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
            </div>

            <div>
              <label class="block font-bold text-slate-300 mb-1">Data de Publicação *</label>
              <input type="date" id="date" required class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
            </div>
          </div>

          <!-- Optional Fields: Status / Relator -->
          <div id="statusGroup">
            <label class="block font-bold text-slate-300 mb-1">Status da Norma</label>
            <input type="text" id="status" placeholder="Ex: Em Vigor, Revogada" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
          </div>

          <div id="relatorGroup" class="hidden">
            <label class="block font-bold text-slate-300 mb-1">Relator / Tribunal</label>
            <input type="text" id="relator" placeholder="Ex: Min. Relator do STF-RP" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
          </div>

          <!-- Title -->
          <div>
            <label class="block font-bold text-slate-300 mb-1">Título da Norma / Ementa *</label>
            <input type="text" id="title" placeholder="Ex: Código Civil das Relações Sociais" required class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
          </div>

          <!-- Summary -->
          <div>
            <label class="block font-bold text-slate-300 mb-1">Resumo Curto (Exibido na Lista) *</label>
            <textarea id="summary" rows="2" placeholder="Breve explicação do conteúdo da norma..." required class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none"></textarea>
          </div>

          <!-- Full Content -->
          <div>
            <label class="block font-bold text-slate-300 mb-1">Texto Integral (Artigos / Ementa Completa) *</label>
            <textarea id="fullContent" rows="6" placeholder="ARTIGO 1º - Toda pessoa é capaz de...&#10;ARTIGO 2º - ..." required class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 font-mono focus:border-emerald-500 focus:outline-none"></textarea>
          </div>

          <!-- Tags -->
          <div>
            <label class="block font-bold text-slate-300 mb-1">Tags (Separadas por vírgula)</label>
            <input type="text" id="tags" placeholder="Ex: Código Civil, Posse, Contratos" class="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-100 focus:border-emerald-500 focus:outline-none">
          </div>

          <!-- Submit Button -->
          <button type="submit" id="submitBtn" class="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition">
            💾 Salvar Norma na Base de Dados
          </button>
        </form>
      </div>

      <!-- Right Column: Registered Items List -->
      <div class="lg:col-span-6 space-y-6">
        
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div class="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
            <h2 class="text-lg font-bold text-white flex items-center gap-2">
              <span>📚 Normas Cadastradas</span>
            </h2>

            <select id="filterSubject" onchange="renderItems()" class="bg-slate-950 border border-slate-700 rounded-xl p-1.5 text-xs text-slate-200">
              <option value="all">Todas as Matérias</option>
              <option value="civil">Direito Civil</option>
              <option value="penal">Direito Penal</option>
              <option value="proc_penal">Direito Processual Penal</option>
              <option value="proc_civil">Direito Processual Civil</option>
              <option value="tributario_comercial">Direito Tributário e Comercial</option>
              <option value="eleitoral">Direito Eleitoral</option>
              <option value="regulamentos">Regulamentos Internos</option>
            </select>
          </div>

          <div id="itemsContainer" class="space-y-3 max-h-[650px] overflow-y-auto pr-1">
            <!-- Items rendered here -->
          </div>
        </div>

      </div>

    </div>
  </main>

  <script>
    let globalData = {};

    document.getElementById('date').value = new Date().toISOString().split('T')[0];

    function toggleSectorFields() {
      const sector = document.getElementById('sector').value;
      if (sector === 'jurisprudencia') {
        document.getElementById('statusGroup').classList.add('hidden');
        document.getElementById('relatorGroup').classList.remove('hidden');
      } else {
        document.getElementById('statusGroup').classList.remove('hidden');
        document.getElementById('relatorGroup').classList.add('hidden');
      }
    }

    async function loadData() {
      try {
        const res = await fetch('/api/data');
        globalData = await res.json();
        renderItems();
      } catch (err) {
        showAlert('Erro ao carregar os dados: ' + err.message, 'error');
      }
    }

    function renderItems() {
      const container = document.getElementById('itemsContainer');
      const filter = document.getElementById('filterSubject').value;
      container.innerHTML = '';

      let totalCount = 0;

      Object.keys(globalData).forEach(subjId => {
        if (filter !== 'all' && filter !== subjId) return;

        const sub = globalData[subjId];
        ['leis_normas', 'jurisprudencia'].forEach(sec => {
          (sub[sec] || []).forEach(item => {
            totalCount++;
            const card = document.createElement('div');
            card.className = 'p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition relative group';
            card.innerHTML = \`
              <div class="flex items-center justify-between gap-2 mb-2">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-mono">\${item.number}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">\${item.type}</span>
                  <span class="text-[10px] text-slate-400">\${subjId.toUpperCase()}</span>
                </div>
                <button onclick="deleteItem('\${subjId}', '\${sec}', '\${item.id}')" class="text-xs text-red-400 hover:text-red-300 px-2 py-1 bg-red-950/40 rounded border border-red-800/40">Excluir</button>
              </div>
              <h4 class="text-xs font-bold text-slate-100 mb-1">\${item.title}</h4>
              <p class="text-[11px] text-slate-400 line-clamp-2">\${item.summary}</p>
            \`;
            container.appendChild(card);
          });
        });
      });

      if (totalCount === 0) {
        container.innerHTML = '<p class="text-xs text-slate-500 text-center py-8">Nenhuma norma cadastrada ainda nesta seleção.</p>';
      }
    }

    async function handleFormSubmit(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      submitBtn.disabled = true;
      submitBtn.innerText = 'Salvando...';

      const subjectId = document.getElementById('subjectId').value;
      const sector = document.getElementById('sector').value;

      const newItem = {
        subjectId,
        sector,
        type: document.getElementById('type').value,
        number: document.getElementById('number').value,
        title: document.getElementById('title').value,
        date: document.getElementById('date').value,
        summary: document.getElementById('summary').value,
        fullContent: document.getElementById('fullContent').value,
        tags: document.getElementById('tags').value.split(',').map(t => t.trim()).filter(Boolean)
      };

      if (sector === 'leis_normas') {
        newItem.status = document.getElementById('status').value || 'Em Vigor';
      } else {
        newItem.relator = document.getElementById('relator').value || 'Tribunal de Justiça RP';
      }

      try {
        const res = await fetch('/api/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem)
        });

        const data = await res.json();
        if (data.success) {
          showAlert('✅ Norma cadastrada com sucesso na base local!', 'success');
          document.getElementById('title').value = '';
          document.getElementById('number').value = '';
          document.getElementById('summary').value = '';
          document.getElementById('fullContent').value = '';
          loadData();
        } else {
          showAlert('Erro: ' + data.error, 'error');
        }
      } catch (err) {
        showAlert('Erro de conexão ao salvar: ' + err.message, 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = '💾 Salvar Norma na Base de Dados';
      }
    }

    async function deleteItem(subjectId, sector, itemId) {
      if (!confirm('Tem certeza que deseja excluir esta norma?')) return;
      try {
        const res = await fetch('/api/delete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subjectId, sector, itemId })
        });
        const data = await res.json();
        if (data.success) {
          showAlert('Norma excluída com sucesso!', 'success');
          loadData();
        }
      } catch (err) {
        showAlert('Erro ao excluir: ' + err.message, 'error');
      }
    }

    async function publishToGit() {
      const btn = document.getElementById('gitPushBtn');
      btn.disabled = true;
      btn.innerText = '⏳ Executando git commit & push...';

      try {
        const res = await fetch('/api/git-push', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ commitMessage: 'feat: adicionadas novas normas via painel local' })
        });
        const data = await res.json();

        if (data.success) {
          showAlert('🚀 Push realizado com sucesso no GitHub! O Render está atualizando o site agora.', 'success');
        } else {
          showAlert('Erro no Git Push: ' + data.error, 'error');
        }
      } catch (err) {
        showAlert('Erro de conexão ao executar Git: ' + err.message, 'error');
      } finally {
        btn.disabled = false;
        btn.innerText = '🚀 Fazer Commit e Push para GitHub';
      }
    }

    function showAlert(msg, type) {
      const box = document.getElementById('alertBox');
      box.innerText = msg;
      box.className = \`mb-6 p-4 rounded-xl text-sm font-medium border \${
        type === 'error'
          ? 'bg-red-950/80 text-red-300 border-red-800'
          : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
      }\`;
      box.classList.remove('hidden');
      setTimeout(() => box.classList.add('hidden'), 5000);
    }

    loadData();
  </script>
</body>
</html>`;
}
