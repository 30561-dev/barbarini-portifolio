import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'integramente',
    name: 'Integramente',
    badge: 'Projeto educacional',
    category: 'Educação & Acessibilidade',
    description:
      'Plataforma educacional desenvolvida como projeto acadêmico, voltada à inclusão e à aprendizagem adaptada para crianças e adolescentes com Transtorno do Espectro Autista (TEA). O projeto busca oferecer uma experiência acessível, organizada e previsível, reduzindo barreiras de aprendizagem com interface intuitiva e acolhedora.',
    image: './images/projeto-integramente.png',
    technologies: ['React Native', 'TypeScript', 'Expo'],
    // Sem link público no momento — preparado para futura inserção
    liveUrl: undefined,
    githubUrl: undefined,
    status: 'Projeto acadêmico',
    highlights: [
      'Acessibilidade digital',
      'Aprendizagem adaptada',
      'Inclusão de estudantes com TEA',
      'Organização e previsibilidade da interface',
      'Experiência de aprendizagem mais acessível'
    ]
  },
  {
    id: 'coffeebreak',
    name: 'CoffeeBreak®',
    badge: 'Projeto de produto',
    category: 'Design de Produto & Web',
    quote: 'A cafeteira que prepara foco, não café.',
    description:
      'Conceito inovador de dispositivo de produtividade desenvolvido para reduzir distrações digitais durante os estudos e trabalho. Projetado como uma "cafeteira de foco", o dispositivo armazena o smartphone em um compartimento seguro com carregamento por indução integrado a um temporizador Pomodoro.',
    image: './images/projeto-coffeebreak.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Design de Produto'],
    liveUrl: 'https://cofeebreak-2.vercel.app/',
    githubUrl: undefined,
    status: 'Concluído',
    highlights: [
      'Conceito de produto inovador',
      'Design de produto com modelagem conceitual',
      'Redução de distrações digitais',
      'Compartimento seguro para celular',
      'Carregamento por indução integrado',
      'Temporizador Pomodoro físico/digital',
      'Landing page web de apresentação'
    ]
  },
  {
    id: 'front-certo',
    name: 'Front-Certo',
    badge: 'Projeto web',
    category: 'Desenvolvimento Web',
    description:
      'Projeto web interativo desenvolvido no contexto acadêmico como o mural digital oficial da turma 3C. Focado na apresentação de comunicados, organização de conteúdos e experiência fluida para os alunos.',
    image: './images/projeto-frontcerto.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://front-certo-delta.vercel.app/',
    githubUrl: undefined,
    status: 'Concluído',
    highlights: [
      'Mural digital colaborativo para turma 3C',
      'Interface web responsiva e dinâmica',
      'Aplicação prática em ambiente acadêmico'
    ]
  },
  {
    id: 'datasmart',
    name: 'DataSmart',
    badge: 'Projeto de redes',
    category: 'Infraestrutura de Redes',
    description:
      'Projeto acadêmico de redes de computadores com implementação de VLANs, análise da tabela MAC e segmentação de uma rede local corporativa. A atividade envolveu organização da topologia física e lógica, configuração de switches e documentação de infraestrutura.',
    image: './images/projeto-redes.png',
    technologies: ['Cisco Packet Tracer', 'Redes de computadores', 'VLAN', 'Switching'],
    // Link público em aberto para documentação futura
    liveUrl: undefined,
    githubUrl: undefined,
    status: 'Projeto acadêmico',
    highlights: [
      'Segmentação avançada com VLANs',
      'Análise de switching e tabela MAC',
      'Topologia e simulação no Cisco Packet Tracer',
      'Documentação técnica de infraestrutura'
    ]
  }
];
