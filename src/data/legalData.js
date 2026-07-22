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

export const LEGAL_DATA = {
  "civil": {
    "leis_normas": [],
    "jurisprudencia": []
  },
  "penal": {
    "leis_normas": [],
    "jurisprudencia": []
  },
  "proc_penal": {
    "leis_normas": [],
    "jurisprudencia": []
  },
  "proc_civil": {
    "leis_normas": [],
    "jurisprudencia": []
  },
  "tributario_comercial": {
    "leis_normas": [],
    "jurisprudencia": []
  },
  "eleitoral": {
    "leis_normas": [],
    "jurisprudencia": []
  },
  "regulamentos": {
    "leis_normas": [
      {
        "type": "Regulamento STAFF",
        "number": "Lei da Corregedoria",
        "title": "Lei da Corregedoria",
        "date": "2026-07-22",
        "summary": "Institui a Corregedoria e delimita seus poderes básicos.",
        "fullContent": "AVISO OFICIAL\n\nExercício de Competência da Corregedoria\n\nFica estabelecido que, a partir desta data, a Corregedoria exercerá competência de fiscalização, supervisão e controle administrativo sobre as corporações federais, no âmbito de suas atribuições.\n\nO exercício dessa competência observará os seguintes limites:\n\nArt. 1º – Limites da atuação\n\nA Corregedoria:\n\nI – Não poderá intervir diretamente nas atividades operacionais das corporações, exceto quando houver previsão normativa ou determinação da autoridade competente.\n\nII – Não substituirá a autoridade máxima de cada corporação em decisões administrativas, estratégicas ou operacionais.\n\nIII – Deverá atuar com observância aos princípios da legalidade, impessoalidade, moralidade, publicidade, eficiência, proporcionalidade e do devido processo.\n\nIV – Não poderá aplicar sanções sem assegurar ao interessado o contraditório e a ampla defesa.\n\nV – Não poderá editar determinações que extrapolem sua competência ou contrariem normas superiores.\n\nVI – Todas as decisões deverão ser devidamente fundamentadas, registradas e sujeitas aos mecanismos de revisão previstos.\n\nVII – Sua atuação restringe-se à fiscalização da disciplina, da ética, da legalidade e da regularidade administrativa, sendo vedada qualquer forma de perseguição, favorecimento ou interferência indevida na autonomia institucional das corporações.\n\nDisposição Final\n\nEste aviso entra em vigor na data de sua publicação e deverá ser observado por todas as corporações federais e pelos agentes sujeitos à atuação correicional, respeitados os limites estabelecidos neste documento.",
        "tags": [
          "Regimento Interno",
          "Corregedoria",
          "Norma"
        ],
        "status": "Em vigor",
        "id": "regulamentos-mrwo4n1q"
      },
      {
        "type": "Regulamento Interno TJPR",
        "number": "REGULAMENTO INTERNO Nº 01/2026",
        "title": "Regulamento dos Precatórios e Advogados Dativos - TJPR",
        "date": "2026-07-22",
        "summary": "Dispõe sobre a regulamentação da advocacia dativa\nem convênio com a Ordem dos Advogados do Brasil\n(OAB), institui e normatiza a sistemática de expedição\nde Precatórios pelo Poder Judiciário em face da Fazenda Pública, delineando os ritos de exigibilidade, autenticidade e presunção de liquidez, além de estabelecer disposições transitórias de força normativa diante\nda vacância legislativa.",
        "fullContent": "REGULAMENTO INTERNO Nº 01/2026\nDispõe sobre a regulamentação da advocacia dativa\nem convênio com a Ordem dos Advogados do Brasil\n(OAB), institui e normatiza a sistemática de expedição\nde Precatórios pelo Poder Judiciário em face da Fazenda Pública, delineando os ritos de exigibilidade, autenticidade e presunção de liquidez, além de estabelecer disposições transitórias de força normativa diante\nda vacância legislativa.\nO Excelentíssimo Senhor Dr. Renato Prado, Juiz de Direito do Foro Central da Comarca\nda Região Metropolitana de Curitiba, Estado do Paraná, no uso de suas atribuições legais\ne regimentais,\nCONSIDERANDO a ausência de um Poder Legislativo plenamente constituído no momento presente e a vacância de norma jurídica formal e específica em sentido estrito\nque regulamente as matérias aqui tratadas;\nCONSIDERANDO o Princípio da Autorregulação inerente à organicidade das instituições, bem como o dever irrenunciável do Poder Judiciário de garantir a prestação jurisdicional ininterrupta e a segurança jurídica aos jurisdicionados;\nCONSIDERANDO a necessidade premente de estruturar o acesso à justiça mediante representação técnica (advocacia dativa) e a liquidação de obrigações financeiras reconhecidas judicialmente (precatórios), resguardando o equilíbrio, a isonomia e a equidade\nconstitucional entre entes privados e entidades de direito público;\nRESOLVE EDITAR O PRESENTE REGULAMENTO INTERNO:\nCAPÍTULO I\nDA NATUREZA NORMATIVA E DAS DISPOSIÇÕES PRELIMINARES\n1\nPoder Judiciário — Estado do Paraná 1ª Vara Cível de Curitiba\nArt. 1º Este Regulamento Interno possui eficácia e força normativa plena e cogente em\ntoda a jurisdição deste juízo, vigorando como norma material e processual até que o\nPoder Legislativo competente delibere e promulgue leis específicas em sentido estrito\nsobre a matéria, em observância ao princípio da continuidade da prestação estatal.\nArt. 2º Ficam os demais Poderes constitucionais, em especial os órgãos componentes do\nGoverno Federal, formalmente notificados e cientificados, através da publicação deste\nato, acerca da existência, validade e executoriedade dos institutos aqui disciplinados.\nParágrafo único. Assegura-se aos entes governamentais o direito à ampla defesa,\nfacultando-se-lhes a prerrogativa de consultar, promover analogias regulamentares, ou\ncontestar as determinações oriundas deste regulamento por meio das vias judiciais cabíveis (tais como sede de embargos), prestigiando-se a isonomia e a equidade material.\nCAPÍTULO II\nDA ADVOCACIA DATIVA E DA RELAÇÃO COM A OAB\nArt. 3º O Tribunal de Justiça do Estado do Paraná passará a valer-se da nomeação de\nadvogados dativos para atuar em processos cujas partes não possuam procurador constituído ou em que a representação por profissional habilitado seja condição de validade\ndo ato jurídico.\nArt. 4º O processo de seleção e indicação do advogado dativo dar-se-á mediante comunicação direta e descentralizada, garantindo-se a celeridade processual.\n§ 1º O Juízo responsável pelo processo oficiará diretamente à OAB, informando\na necessidade de representação e estipulando prazo para a nomeação, sendo inexigível\nqualquer mediação ou chancela prévia da Presidência do Tribunal de Justiça para este\nato requisitório específico.\n§ 2º Incumbirá à Ordem dos Advogados do Brasil, orientada por seus regulamentos internos e pelo Princípio da Autorregulação, processar o pedido e, dentro do prazo\njudicial estipulado, oficiar em resposta ao Juízo requisitante declinando o nome e as credenciais do advogado selecionado.\n§ 3º O advogado dativo nomeado nos autos passará a exercer o múnus público\ncom total independência técnica, assumindo todos os deveres, direitos, garantias e prerrogativas processuais inerentes ao mandato, equiparando-se para todos os fins legais ao\nadvogado convencionado pelas partes.\nArt. 5º A apuração dos haveres processuais e orçamentários ocorrerá no bojo dos próprios autos do processo em que o advogado dativo atuou.\n§ 1º Encerrada a prestação jurisdicional e vencida a causa, o Juízo processante\nelaborará, nos próprios autos, a memória de cálculo minuciosa, contemplando os ho2\nPoder Judiciário — Estado do Paraná 1ª Vara Cível de Curitiba\nnorários sucumbenciais, eventuais multas processuais e demais incidentes contábeis e\norçamentários cabíveis.\n§ 2º Concluída a apuração, para fins de pagamento pelo erário, o Juízo da causa\nremeterá, de ofício, a referida folha de cálculo originária à Presidência do Tribunal de\nJustiça do Paraná.\nArt. 6º Recebida a folha de cálculo pela Presidência do Tribunal de Justiça, instaurar-seá fase de tratativas interinstitucionais para a fixação e liberação da remuneração final\ndo causídico.\n§ 1º A Presidência do Tribunal de Justiça notificará a Presidência da OAB, por\nmeio de comunicações oficiais, para a negociação e estipulação conjunta dos valores a\nserem pagos ao advogado dativo, complementares àqueles já apurados na folha de cálculo judicial originária.\n§ 2º Fica garantido e positivado por este Regulamento o direito líquido e certo de\no advogado dativo (nomeado à causa) participar ativamente, no âmbito interno da OAB,\ndas discussões e negociações relativas à estipulação do quantum de seus honorários.\n§ 3º Concluída a negociação e alcançado o referendo, a Presidência da OAB remeterá formalmente à Presidência do Tribunal de Justiça a consolidação dos cálculos e\nacordos finais.\n§ 4º De posse dos valores definitivos, a Presidência do Tribunal de Justiça expedirá o competente título precatório em favor do advogado. A partir do momento formal\nde sua emissão, incidirão todas as regras, prerrogativas e disposições de exigibilidade\ncontidas no Capítulo III deste Regulamento e nas legislações supervenientes.\nCAPÍTULO III\nDAS REQUISIÇÕES DE PAGAMENTO E DOS PRECATÓRIOS\nArt. 7º Fica instituído o Precatório Requisitório como o instrumento oficial e compulsório de formalização de dívidas do erário. Define-se como Precatório todo documento\nexpedido pelo Poder Judiciário que condena e ordena o pagamento pecuniário por parte\ndo Governo Federal em favor de qualquer pessoa, física ou jurídica, de direito público\nou privado, que seja legalmente sujeito de direitos.\nParágrafo único. O regime de precatórios abrange de forma irrestrita qualquer\nmodalidade de pagamento ou disposição financeira pelo Governo Federal que não seja\nde caráter licitatório, incluindo-se condenações judiciais, pagamentos em atraso e indenizações diversas.\nArt. 8º A competência para a emissão dos títulos precatórios é indelegável e restrita ao\nórgão de cúpula de maior grau hierárquico da instituição requisitante.\n3\nPoder Judiciário — Estado do Paraná 1ª Vara Cível de Curitiba\n§ 1º No âmbito do Poder Judiciário, figurando como a instituição ativa de maior\ngrau de jurisdição e poder de normatização neste momento, a competência originária\ne exclusiva para a emissão de precatórios recai sobre o Tribunal de Justiça do Estado\ndo Paraná (TJPR), materializada na figura de seu Presidente, que expedirá a ordem em\nnome de todo o Poder Judiciário.\n§ 2º É terminantemente vedada a pluralidade de autoridades emissoras em um\nmesmo título precatório, devendo cada instrumento possuir uma única autoridade outorgante.\nArt. 9º Fica ressalvada à autoridade emissora (Presidente do TJPR) a prerrogativa de\neleger e delegar a outro órgão específico os atos administrativos de verificação, coordenação, recebimento, modificação e análise de contestações dos precatórios emitidos.\nParágrafo único. A delegação de que trata o caput dar-se-á única e exclusivamente por meio de ato normativo explícito e especificado. Referida exigência fundamentase no fato de que, a despeito do princípio da autonomia e autorregulação dos órgãos, a\ndisposição de verbas do Governo Federal é matéria de interesse público primário, exigindo severo controle e observância para mitigar riscos de eventuais omissões ou desvios\nde finalidade.\nArt. 10. Nos termos deste Regulamento Interno, o processamento originário dos precatórios judiciais será conduzido pela Presidência do TJPR, consolidando-se a concessão do\ntítulo mediante a aposição de assinatura própria do Presidente nos sistemas internos e\noficiais deste Tribunal.\nArt. 11. Os títulos precatórios revestem-se do caráter de imprescritibilidade. Enquanto\nperdurarem as bases constitucionais e o ordenamento jurídico governamental que regeram a sua emissão — ainda que em última instância ou de forma análoga —, o precatório\nmanter-se-á válido e exequível.\nArt. 12. A exigibilidade, liquidação e execução do precatório dar-se-ão, primariamente,\npelas vias administrativas inerentes ao próprio órgão emissor do título, devendo o credor\n(seja ente público ou privado) protocolar seu requerimento nos sistemas internos da\nautoridade outorgante.\n§ 1º É lícita e plena de direito a inserção dos precatórios requisitados em uma fila\ncronológica ou de prioridades para liquidação. A ausência de pagamento imediato, justificada por razões de processamento administrativo interno ou dotação orçamentária,\nnão configura ilegalidade ou ofensa a direito líquido e certo.\n§ 2º A despeito da prerrogativa de organização da fila e do tempo próprio de\ntrâmite, a administração do órgão emissor fica adstrita à observância do Princípio da\nRazoabilidade, não podendo o pagamento ser protelado de forma abusiva ou injustificada que esvazie o direito do credor.\n4\nPoder Judiciário — Estado do Paraná 1ª Vara Cível de Curitiba\nArt. 13. Esgotadas as vias administrativas ou configurada ofensa ao Princípio da Razoabilidade temporal, a persecução do crédito consubstanciado no precatório dar-se-á por\nvia de Execução Judicial.\n§ 1º A execução judicial de precatórios não seguirá o rito do procedimento ordinário comum, tampouco o rito padrão de execução cível aplicável a entes privados,\nsubmetendo-se a um rito especial e apartado caracterizado como Execução contra a\nFazenda Pública.\n§ 2º As minúcias procedimentais deste rito especial de execução, bem como as\nprerrogativas da Fazenda Pública em juízo, serão objeto de legislação específica superveniente.\n§ 3º Em caso de inércia legislativa, e enquanto não promulgada lei estrita sobre\na matéria, o rito da Execução contra a Fazenda Pública será provisoriamente tutelado e\nespecificado mediante novos Regimentos Internos ou Provimentos deste Poder Judiciário.\nArt. 14. A emissão dos títulos precatórios dar-se-á em estrita observância aos procedimentos e formulários oficiais estabelecidos no âmbito dos sistemas do Tribunal de Justiça.\nParágrafo único. Em obediência ao Princípio da Transparência, a expedição do\nprecatório ocorrerá, obrigatoriamente, em vias simultâneas, devendo ser fornecida uma\nvia comprobatória ao titular do crédito e retida uma via de controle e custódia junto ao\nGoverno Federal.\nArt. 15. O órgão emissor garantirá mecanismos para que a autenticidade e a higidez\ndocumental dos precatórios sejam consultáveis e verificáveis, a qualquer tempo, tanto\npela parte exequente quanto pelo ente incumbido da liquidação.\nArt. 16. Os precatórios expedidos pelo Tribunal de Justiça do Estado do Paraná, na\nqualidade de órgão de cúpula do Poder Judiciário, gozam de presunção absoluta de\nliquidez, certeza e legalidade.\nParágrafo único. A referida presunção somente restará elidida mediante demonstração inequívoca de vício, nulidade ou ilegalidade formalizada em sede processual\nprópria, ou havendo manifestação contrária expressa e fundamentada do Ministério Público — em sua função de fiscal da ordem jurídica — ou do Tribunal de Contas (da União\nou do Estado), a partir do momento em que tais órgãos restarem plenamente instituídos\ne positivados no ordenamento.\nCAPÍTULO IV\nDAS DISPOSIÇÕES FINAIS\n5\nPoder Judiciário — Estado do Paraná 1ª Vara Cível de Curitiba\nArt. 17. Este Regulamento Interno entra em vigor na data de sua publicação oficial,\nrevogando-se as disposições provisórias em contrário.\n",
        "tags": [
          "Regimento Interno",
          "TJRP",
          "Tribunal",
          "Precatórios",
          "OAB",
          "Advogados",
          "dativos",
          "Norma"
        ],
        "status": "Em vigor",
        "id": "regulamentos-mrwo6lgh"
      }
    ],
    "jurisprudencia": []
  }
};
