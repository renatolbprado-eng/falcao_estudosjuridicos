// Base de dados para Falcão - Estudos Jurídicos (Governo Federal RP / Nova Paraná RP)

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

// Base de dados limpa (pronta para receber leis e jurisprudências do usuário)
export const LEGAL_DATA = {
  civil: {
    leis_normas: [],
    jurisprudencia: []
  },
  penal: {
    leis_normas: [],
    jurisprudencia: []
  },
  proc_penal: {
    leis_normas: [],
    jurisprudencia: []
  },
  proc_civil: {
    leis_normas: [],
    jurisprudencia: []
  },
  tributario_comercial: {
    leis_normas: [],
    jurisprudencia: []
  },
  eleitoral: {
    leis_normas: [],
    jurisprudencia: []
  },
  regulamentos: {
    leis_normas: [],
    jurisprudencia: []
  }
};
