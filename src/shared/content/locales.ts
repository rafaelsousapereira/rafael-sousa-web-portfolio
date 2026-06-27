export const locales = ['pt-BR', 'en-US'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt-BR'

export type TranslationDictionary = {
  language: {
    label: string
    portuguese: string
    english: string
  }
  nav: {
    home: string
    about: string
    contact: string
  }
  sections: {
    about: string
    experience: string
    stack: string
    certifications: string
    projects: string
    articles: string
    contact: string
  }
  about: {
    pageTitle: string
    experienceTitle: string
  }
  hero: {
    greeting: string
    ctaProjects: string
    ctaContact: string
    staffLabel: string
    mainStack: string
    technologies: string
    deliveryFocus: string
    currentRole: string
    previousRole: string
  }
  theme: {
    label: string
    light: string
    dark: string
    system: string
  }
  footer: {
    developedBy: string
    rightsReserved: string
  }
  notFound: {
    title: string
    description: string
  }
  contact: {
    title: string
    subtitle: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    submit: string
    success: string
    error: string
    warning: {
      configMissing: string
      network: string
    }
    recipientName: string
    validation: {
      nameMin: string
      nameMax: string
      email: string
      messageMin: string
    }
  }
  header: {
    openMenu: string
    closeMenu: string
  }
  empty: {
    projects: string
    articles: string
    certifications: string
  }
  timeline: {
    present: string
  }
  project: {
    businessImpact: string
    viewOnGithub: string
  }
  article: {
    viewOnLinkedIn: string
  }
  stack: {
    subtitle: string
  }
  social: {
    linkedin: string
    github: string
  }
}

export const translations = {
  'pt-BR': {
    language: {
      label: 'Idioma',
      portuguese: 'Português',
      english: 'Inglês',
    },
    nav: {
      home: 'Home',
      about: 'Sobre',
      contact: 'Contato',
    },
    sections: {
      about: 'Sobre mim',
      experience: 'Experiências',
      stack: 'Stack técnica',
      certifications: 'Certificações',
      projects: 'Projetos',
      articles: 'Artigos',
      contact: 'Contato',
    },
    about: {
      pageTitle: 'Sobre mim',
      experienceTitle: 'Experiência Profissional',
    },
    hero: {
      greeting: 'Bem-vindos ao meu portfólio!',
      ctaProjects: 'Projetos',
      ctaContact: 'Contato',
      staffLabel: 'Perfil',
      mainStack: 'Stack principal',
      technologies: 'Tecnologias',
      deliveryFocus: 'Foco de entrega',
      currentRole: 'Cargo atual',
      previousRole: 'Cargo anterior',
    },
    theme: {
      label: 'Tema',
      light: 'Claro',
      dark: 'Escuro',
      system: 'Sistema',
    },
    footer: {
      developedBy: 'Desenvolvido por',
      rightsReserved: 'Todos os direitos reservados.',
    },
    notFound: {
      title: 'Página não encontrada',
      description: 'Algo deu errado. Tente novamente mais tarde.',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Me envie uma mensagem!',
      nameLabel: 'Digite seu nome',
      emailLabel: 'Digite seu e-mail',
      messageLabel: 'Digite sua mensagem',
      submit: 'Enviar mensagem',
      success: 'E-mail enviado com sucesso!',
      error: 'Erro ao enviar e-mail. Tente novamente.',
      warning: {
        configMissing:
          'Formulário indisponível: variáveis de ambiente do EmailJS ausentes. Avise o administrador do site.',
        network: 'Sem conexão de internet. Verifique sua rede e tente novamente.',
      },
      recipientName: 'Rafael Sousa Pereira | Suporte',
      validation: {
        nameMin: 'Nome deve ter no mínimo 5 caracteres',
        nameMax: 'Nome deve conter no máximo 50 caracteres',
        email: 'E-mail é obrigatório',
        messageMin: 'Mensagem deve conter no mínimo 5 caracteres',
      },
    },
    header: {
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    empty: {
      projects: 'Nenhum projeto listado.',
      articles: 'Nenhum artigo listado.',
      certifications: 'Nenhuma certificação pública listada no momento.',
    },
    timeline: {
      present: 'Presente',
    },
    project: {
      businessImpact: 'Impacto no negócio:',
      viewOnGithub: 'Ver no GitHub',
    },
    article: {
      viewOnLinkedIn: 'Ver no LinkedIn',
    },
    stack: {
      subtitle:
        'Java 21, Spring Boot, RabbitMQ, PostgreSQL, Docker, Azure e AWS organizados por domínio de entrega.',
    },
    social: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  'en-US': {
    language: {
      label: 'Language',
      portuguese: 'Portuguese',
      english: 'English',
    },
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
    },
    sections: {
      about: 'About me',
      experience: 'Experience',
      stack: 'Technical stack',
      certifications: 'Certifications',
      projects: 'Projects',
      articles: 'Articles',
      contact: 'Contact',
    },
    about: {
      pageTitle: 'About me',
      experienceTitle: 'Professional Experience',
    },
    hero: {
      greeting: 'Welcome to my portfolio!',
      ctaProjects: 'Projects',
      ctaContact: 'Contact',
      staffLabel: 'Profile',
      mainStack: 'Main stack',
      technologies: 'Technologies',
      deliveryFocus: 'Delivery focus',
      currentRole: 'Current role',
      previousRole: 'Previous role',
    },
    theme: {
      label: 'Theme',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    footer: {
      developedBy: 'Developed by',
      rightsReserved: 'All rights reserved.',
    },
    notFound: {
      title: 'Page not found',
      description: 'Something went wrong. Please try again later.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Send me a message!',
      nameLabel: 'Type your name',
      warning: {
        configMissing:
          'Form unavailable: EmailJS environment variables are missing. Please notify the site administrator.',
        network: 'No internet connection. Check your network and try again.',
      },
      emailLabel: 'Type your email',
      messageLabel: 'Type your message',
      submit: 'Send message',
      success: 'Email sent successfully!',
      error: 'Error sending email. Please try again.',
      recipientName: 'Rafael Sousa Pereira | Support',
      validation: {
        nameMin: 'Name must have at least 5 characters',
        nameMax: 'Name must have at most 50 characters',
        email: 'Email is required',
        messageMin: 'Message must have at least 5 characters',
      },
    },
    header: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    empty: {
      projects: 'No projects listed.',
      articles: 'No articles listed.',
      certifications: 'No public certifications listed yet.',
    },
    timeline: {
      present: 'Present',
    },
    project: {
      businessImpact: 'Business impact:',
      viewOnGithub: 'View on GitHub',
    },
    article: {
      viewOnLinkedIn: 'View on LinkedIn',
    },
    stack: {
      subtitle:
        'Java 21, Spring Boot, RabbitMQ, PostgreSQL, Docker, Azure and AWS organized by delivery domain.',
    },
    social: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
} satisfies Record<Locale, TranslationDictionary>