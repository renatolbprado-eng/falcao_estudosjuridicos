// Seed data for Falcão - Estudos Jurídicos (Governo Federal RP)

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
];

export const LEGAL_DATA = {
  civil: {
    leis_normas: [
      {
        id: 'civ-l1',
        type: 'Código Federal',
        number: 'Lei nº 10.406 / Código Civil RP',
        title: 'Código Civil das Relações Sociais e Obrigações',
        date: '2024-01-15',
        status: 'Em Vigor',
        summary: 'Institui as normas gerais de capacidade civil, direitos de personalidade, validade dos negócios jurídicos e responsabilidade civil no âmbito do RP.',
        fullContent: `ARTIGO 1º - Toda pessoa é capaz de direitos e deveres na ordem civil no âmbito do RP de Governo Federal.
ARTIGO 2º - A personalidade civil da pessoa começa do nascimento com vida ou do registro oficial no sistema de cidadania.
ARTIGO 186 - Aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito.
ARTIGO 927 - Aquele que, por ato ilícito (arts. 186 e 187), causar dano a outrem, fica obrigado a repará-lo.`,
        tags: ['Negócios Jurídicos', 'Capacidade', 'Responsabilidade Civil']
      },
      {
        id: 'civ-l2',
        type: 'Lei Ordinária',
        number: 'Lei nº 8.245 / Locações',
        title: 'Lei de Contratos Imobiliários e Posse',
        date: '2024-03-10',
        status: 'Em Vigor',
        summary: 'Dispõe sobre as locações dos imóveis urbanos e os procedimentos a elas pertinentes nas jurisdições federais.',
        fullContent: `ARTIGO 1º - A locação de imóvel urbano regula-se pelas disposições desta lei.
ARTIGO 5º - Seja qual for o fundamento da terminação da locação, a ação do locador para reaver o imóvel é a de despejo.`,
        tags: ['Contratos', 'Imóveis', 'Locação']
      }
    ],
    jurisprudencia: [
      {
        id: 'civ-j1',
        type: 'Súmula Vinculante RP',
        number: 'Súmula nº 12 / STF-RP',
        title: 'Dano Moral In Re Ipsa em Abuso de Poder Privado',
        date: '2024-05-20',
        relator: 'Min. Relator de Governo',
        summary: 'A recusa injustificada na prestação de serviço essencial configura dano moral in re ipsa, prescindindo de prova do prejuízo.',
        fullContent: `EMENTA: DIREITO CIVIL. RESPONSABILIDADE CIVIL. RECUSA INJUSTIFICADA DE SERVIÇO PÚBLICO OU PRIVADO ESSENCIAL. DANO MORAL PRESUMIDO (IN RE IPSA). FIXAÇÃO DE REPARAÇÃO JUSTA.
SÚMULA: Configurante-se violação direta aos direitos de personalidade a interrupção indevida de serviço essencial, sujeitando o causador à obrigação imediata de indenizar.`,
        tags: ['Dano Moral', 'In Re Ipsa', 'STF-RP']
      }
    ]
  },
  penal: {
    leis_normas: [
      {
        id: 'pen-l1',
        type: 'Código Penal RP',
        number: 'Decreto-Lei nº 2.848 / Código Penal',
        title: 'Código Penal Federativo',
        date: '2024-01-01',
        status: 'Em Vigor',
        summary: 'Define os crimes contra a vida, patrimônio, incolumidade pública e Administração Pública Federal no RP.',
        fullContent: `ARTIGO 312 - Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, ou desviá-lo, em proveito próprio ou alheio (Peculato).
Pena - Reclusão, de 2 a 12 anos, e multa.
ARTIGO 317 - Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida (Corrupção Passiva).
ARTIGO 333 - Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício (Corrupção Ativa).`,
        tags: ['Peculato', 'Corrupção', 'Crimes Funcionais']
      },
      {
        id: 'pen-l2',
        type: 'Lei de Armas',
        number: 'Lei nº 10.826 / Estatuto de Armas RP',
        title: 'Estatuto de Controle de Armas e Munições',
        date: '2024-02-14',
        status: 'Em Vigor',
        summary: 'Dispõe sobre registro, posse e porte de armas de fogo, definindo crimes e penas para o porte ilegal.',
        fullContent: `ARTIGO 14 - Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal ou regulamentar.
Pena - Reclusão, de 2 a 4 anos, e multa.`,
        tags: ['Porte Ilegal', 'Segurança Pública']
      }
    ],
    jurisprudencia: [
      {
        id: 'pen-j1',
        type: 'Precedente STJ-RP',
        number: 'Recurso Especial nº 402/2024',
        title: 'Consunção no Crime de Porte Ilegal e Roubo Majorado',
        date: '2024-06-11',
        relator: 'Min. Turma Criminal',
        summary: 'O crime de porte ilegal de arma de fogo é absorvido pelo delito de roubo quando utilizado como meio estrito de execução do assalto.',
        fullContent: `EMENTA: PENAL E PROCESSO PENAL. RECURSO ESPECIAL. PRINCÍPIO DA CONSUNÇÃO. CRIME MEIO E CRIME FIM. ABSORÇÃO DO PORTE ILEGAL PELO ROUBO MAJORADO.
A infração de porte ilegal de arma fica absorvida pelo roubo se comprovado que a posse do armamento destinou-se unicamente ao cometimento do delito patrimonial em contexto único.`,
        tags: ['Consunção', 'Roubo', 'Absorção']
      }
    ]
  },
  proc_penal: {
    leis_normas: [
      {
        id: 'ppen-l1',
        type: 'Código de Processo Penal',
        number: 'Decreto-Lei nº 3.689 / CPP RP',
        title: 'Código de Processo Penal Federal',
        date: '2024-01-10',
        status: 'Em Vigor',
        summary: 'Regula a persecução penal, prisão em flagrante, prisão preventiva, habeas corpus e garantias fundamentais do acusado.',
        fullContent: `ARTIGO 302 - Considera-se em flagrante delito quem:
I - está cometendo a infração penal;
II - acaba de cometê-la;
III - é perseguido, logo após, pela autoridade, pelo ofendido ou por qualquer pessoa, em situação que faça presumir ser autor da infração.
ARTIGO 312 - A prisão preventiva poderá ser decretada como garantia da ordem pública, da ordem econômica, por conveniência da instrução criminal ou para assegurar a aplicação da lei penal.`,
        tags: ['Flagrante', 'Prisão Preventiva', 'Garantias']
      }
    ],
    jurisprudencia: [
      {
        id: 'ppen-j1',
        type: 'Jurisprudência STF',
        number: 'Habeas Corpus nº 108/2024',
        title: 'Ilicitude de Prova Obtida por Busca Pessoal sem Fundada Suspeita',
        date: '2024-04-18',
        relator: 'Pleno do STF-RP',
        summary: 'É nula a prova obtida em busca pessoal realizada unicamente com base em atitude suspeita genérica sem justa causa demonstrada.',
        fullContent: `EMENTA: HABEAS CORPUS. PROCESSO PENAL. BUSCA PESSOAL. NECESSIDADE DE FUNDADA SUSPEITA OBJETIVA. NULIDADE DAS PROVAS DERIVADAS (FRUTOS DA ÁRVORE ENVENENADA). CONCESSÃO DA ORDEM.`,
        tags: ['Busca Pessoal', 'Provas Ilícitas', 'Habeas Corpus']
      }
    ]
  },
  proc_civil: {
    leis_normas: [
      {
        id: 'pciv-l1',
        type: 'Código de Processo Civil',
        number: 'Lei nº 13.105 / CPC RP',
        title: 'Código de Processo Civil',
        date: '2024-01-05',
        status: 'Em Vigor',
        summary: 'Estabelece as normas fundamentais do processo civil, petição inicial, tutelas provisórias e sistema recursal.',
        fullContent: `ARTIGO 300 - A tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo.
ARTIGO 319 - A petição inicial indicará o juízo a que é dirigida, a qualificação das partes, os fatos e fundamentos jurídicos do pedido.`,
        tags: ['Tutela de Urgência', 'Procedimentos', 'Petição Inicial']
      }
    ],
    jurisprudencia: [
      {
        id: 'pciv-j1',
        type: 'Súmula STJ',
        number: 'Súmula nº 45 / STJ-RP',
        title: 'Cabimento de Agravo de Instrumento fora do Rol do Artigo 1.015',
        date: '2024-03-30',
        relator: 'Corte Especial STJ',
        summary: 'O rol do art. 1.015 do CPC é de taxatividade mitigada quando demonstrada a urgência decorrente da inutilidade do julgamento da questão na apelação.',
        fullContent: `EMENTA: RECURSO REPETITIVO. PROCESSUAL CIVIL. TAXATIVIDADE MITIGADA DO ART. 1.015 DO CPC. REQUISITO DE URGÊNCIA DECORRENTE DA INUTILIDADE DO RECURSO FUTURO.`,
        tags: ['Agravo de Instrumento', 'Taxatividade Mitigada']
      }
    ]
  },
  tributario_comercial: {
    leis_normas: [
      {
        id: 'trib-l1',
        type: 'Código Tributário Federal',
        number: 'Lei nº 5.172 / CTN RP',
        title: 'Código Tributário do Governo Federal',
        date: '2024-01-20',
        status: 'Em Vigor',
        summary: 'Dispõe sobre o Sistema Tributário Nacional e institui normas gerais de direito tributário aplicáveis ao RP.',
        fullContent: `ARTIGO 3º - Tributo é toda prestação pecuniária compulsoria, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.
ARTIGO 142 - Compete privativamente à autoridade administrativa constituir o crédito tributário pelo lançamento.`,
        tags: ['Tributos', 'Lançamento', 'Crédito Tributário']
      },
      {
        id: 'trib-l2',
        type: 'Lei Empresarial',
        number: 'Lei nº 11.101 / Sociedades e Falências',
        title: 'Lei de Sociedades Comerciais e Registro Empresarial',
        date: '2024-02-28',
        status: 'Em Vigor',
        summary: 'Regula os atos de comércio, registro de empresas junto ao Governo Federal e recuperação de empresas.',
        fullContent: `ARTIGO 1º - Esta Lei disciplina a recuperação judicial, a recuperação extrajudicial e a falência do empresário e da sociedade empresária no território nacional do RP.`,
        tags: ['Empresas', 'Falências', 'Comercial']
      }
    ],
    jurisprudencia: [
      {
        id: 'trib-j1',
        type: 'Tema com Repercussão Geral',
        number: 'Tema nº 88 / STF-RP',
        title: 'Legalidade da Exigência de Certidão Negativa para Licitações',
        date: '2024-05-02',
        relator: 'Plenário do STF',
        summary: 'É constitucional a exigência de comprovação de quitação tributária perante a Fazenda Federal como requisito de habilitação em licitações públicas.',
        fullContent: `EMENTA: DIREITO TRIBUTÁRIO E ADMINISTRATIVO. REPERCUSSÃO GERAL. EXIGÊNCIA DE CERTIDÃO NEGATIVO DE DÉBITOS TRIBUTÁRIOS EM LICITAÇÕES PÚBLICAS. COMPATIBILIDADE COM A CONSTITUIÇÃO FEDERAL.`,
        tags: ['Certidão Negativa', 'Licitações', 'Constitucionalidade']
      }
    ]
  },
  eleitoral: {
    leis_normas: [
      {
        id: 'ele-l1',
        type: 'Código Eleitoral RP',
        number: 'Lei nº 4.737 / Código Eleitoral',
        title: 'Código Eleitoral Federativo',
        date: '2024-01-08',
        status: 'Em Vigor',
        summary: 'Contém a regulamentação do processo eleitoral, diplomação dos eleitos e funcionamento da Justiça Eleitoral no RP.',
        fullContent: `ARTIGO 1º - Este Código estabelece a organização e o exercício dos direitos políticos, precipuamente os de votar e ser votado.
ARTIGO 222 - É nula a votação quando efetuada perante mesa não constituída legalmente ou quando viciada por falsidade, fraude, coação ou interferência de poder econômico.`,
        tags: ['Eleições', 'Fraude Eleitoral', 'Justiça Eleitoral']
      },
      {
        id: 'ele-l2',
        type: 'Lei das Eleições',
        number: 'Lei nº 9.504 / Normas Eleitorais',
        title: 'Lei de Campanhas e Propaganda Eleitoral',
        date: '2024-02-01',
        status: 'Em Vigor',
        summary: 'Estabelece normas para as eleições de cargos executivos e legislativos do Governo Federal.',
        fullContent: `ARTIGO 73 - São proibidas aos agentes públicos, servidores ou não, as seguintes condutas tendentes a afetar a igualdade de oportunidades entre candidatos nos pleitos eleitorais:
I - ceder ou usar, em benefício de candidato, bens móveis ou imóveis pertencentes à administração direta ou indireta.`,
        tags: ['Abuso de Poder', 'Condutas Vedadas']
      }
    ],
    jurisprudencia: [
      {
        id: 'ele-j1',
        type: 'Súmula TSE-RP',
        number: 'Súmula nº 04 / TSE-RP',
        title: 'Cassação de Diploma por Abuso do Poder Político ou Econômico',
        date: '2024-04-12',
        relator: 'Tribunal Superior Eleitoral RP',
        summary: 'A comprovação de abuso do poder político em benefício de candidatura implica a cassação do registro ou diploma e inelegibilidade.',
        fullContent: `EMENTA: DIREITO ELEITORAL. ABUSO DE PODER POLÍTICO E ECONÔMICO. CASSAÇÃO DE DIPLOMA. INELEGIBILIDADE POR 8 ANOS.
SÚMULA: O uso indevido de estrutura ou recursos governamentais em campanha eleitoral enseja a cassação imediata do diploma e inelegibilidade do beneficiário.`,
        tags: ['Cassação', 'Inelegibilidade', 'TSE-RP']
      }
    ]
  },
  regulamentos: {
    leis_normas: [
      {
        id: 'reg-l1',
        type: 'Regimento Interno',
        number: 'Decreto Executivo nº 01/2024',
        title: 'Regimento Interno da Presidência e Ministérios do Governo Federal',
        date: '2024-01-02',
        status: 'Em Vigor',
        summary: 'Define a competência dos Ministros de Estado, a estrutura das Secretarias Nacionais e a tramitação de atos normativos.',
        fullContent: `ARTIGO 1º - Este Regimento Organiza as atribuições operacionais do Poder Executivo Federal no RP.
ARTIGO 12 - Os Ministros de Estado expedirão Portarias e Instruções Normativas para a execução das leis, decretos e regulamentos concernentes aos seus órgãos.
ARTIGO 25 - As comunicações oficiais entre o Governo Federal e outros órgãos (como a instância GovernoFederal) realizar-se-ão por meio de protocolo digital integrado.`,
        tags: ['Executivo Federal', 'Atos Normativos', 'Integração']
      },
      {
        id: 'reg-l2',
        type: 'Portaria Interministerial',
        number: 'Portaria nº 105 / SG-PR',
        title: 'Normas de Conduta e Ética do Servidor Público Federal',
        date: '2024-03-01',
        status: 'Em Vigor',
        summary: 'Estabelece os deveres de transparência, imparcialidade e sigilo profissional dos ocupantes de cargos comissionados e efetivos.',
        fullContent: `ARTIGO 4º - É vedado ao servidor público federal utilizar o cargo para obter favorecimento pessoal ou de terceiros sob pena de exoneração a bem do serviço público.`,
        tags: ['Ética', 'Servidores Públicos', 'Conduta']
      }
    ],
    jurisprudencia: [
      {
        id: 'reg-j1',
        type: 'Parecer Vinculante AGU-RP',
        number: 'Parecer nº AGU/RP-08',
        title: 'Validade dos Atos Administrativos com Assinatura Digital',
        date: '2024-05-15',
        relator: 'Advocacia-Geral da União RP',
        summary: 'Fixa o entendimento de que todos os atos administrativos, termos e editais assinados com certificado digital oficial possuem presunção absoluta de veracidade.',
        fullContent: `EMENTA: DIREITO ADMINISTRATIVO. ATOS DO GOVERNO FEDERAL. ASSINATURA DIGITAL OFICIAL. PRESUNÇÃO DE VERACIDADE E INTEGRIDADE. APLICAÇÃO EM TODAS AS INSTÂNCIAS DE RP.`,
        tags: ['AGU-RP', 'Atos Administrativos', 'Presunção de Veracidade']
      }
    ]
  }
};
