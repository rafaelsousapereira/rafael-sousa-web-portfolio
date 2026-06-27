import type { Locale } from '@/shared/content/locales'

export type LocalizedString = Record<Locale, string>

type Resolve<T> = T extends LocalizedString
  ? string
  : T extends number | boolean | bigint | symbol
    ? T
    : T extends string
      ? string
      : T extends Array<infer U>
        ? Array<Resolve<U>>
        : { [K in keyof T]: Resolve<T[K]> }

export type AboutContentDefinition = {
  description: LocalizedString
}

export type HeroContentDefinition = {
  name: string
  role: LocalizedString
  subtitle: LocalizedString
  summary: LocalizedString
  currentCompany: {
    name: string
    period: LocalizedString
    summary: LocalizedString
  }
  previousCompany: {
    name: string
    period: LocalizedString
    summary: LocalizedString
  }
  focus: string[]
}

export type PortfolioProjectDefinition = {
  id: string
  title: LocalizedString
  description: LocalizedString
  techStack: string[]
  businessImpact: LocalizedString
  repoUrl: string
}

export type PortfolioArticleDefinition = {
  id: string
  title: LocalizedString
  url: string
  source: LocalizedString
}

export type TechnicalStackGroupDefinition = {
  id: string
  title: LocalizedString
  items: string[]
}

export type CertificationDefinition = {
  id: string
  title: LocalizedString
  issuer: LocalizedString
  description: LocalizedString
}

export type SeoContentDefinition = {
  title: LocalizedString
  description: LocalizedString
  keywords: string[]
}

export type PersonContentDefinition = {
  name: string
  shortName: string
  sirName: string
  position: LocalizedString
  description: LocalizedString
}

export type SocialMediaContent = {
  url: {
    linkedin: string
    github: string
  }
}

export type Responsibility = LocalizedString

export type ExperienceDefinition = {
  id: string
  company: string
  role: LocalizedString
  startYear: number
  endYear?: LocalizedString
  summary: LocalizedString
  responsibilities?: Responsibility[]
}

export type AboutContent = Resolve<AboutContentDefinition>
export type HeroContent = Resolve<HeroContentDefinition>
export type PortfolioProject = Resolve<PortfolioProjectDefinition>
export type PortfolioArticle = Resolve<PortfolioArticleDefinition>
export type TechnicalStackGroup = Resolve<TechnicalStackGroupDefinition>
export type Certification = Resolve<CertificationDefinition>
export type SeoContent = Resolve<SeoContentDefinition>
export type PersonContent = Resolve<PersonContentDefinition>
export type Experience = Omit<Resolve<ExperienceDefinition>, 'endYear'> & {
  endYear?: string
}

export type SiteContent = {
  hero: HeroContent
  about: AboutContent
  technicalStack: TechnicalStackGroup[]
  certifications: Certification[]
  experiences: Experience[]
  projects: PortfolioProject[]
  articles: PortfolioArticle[]
  seo: SeoContent
  person: PersonContent
  socialMedia: SocialMediaContent
}

const techFocus = [
  'Java 21',
  'Spring Boot',
  'RabbitMQ',
  'PostgreSQL',
  'Docker',
  'Azure',
  'AWS',
] as const

const technicalStackDefinition: TechnicalStackGroupDefinition[] = [
  {
    id: 'backend-runtime',
    title: {
      'pt-BR': 'Core Backend',
      'en-US': 'Backend Engineering',
    },
    items: ['Java 21', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    id: 'messaging-data',
    title: {
      'pt-BR': 'Messaging & Data',
      'en-US': 'Distributed Systems',
    },
    items: ['Apache Kafka', 'RabbitMQ', 'PostgreSQL'],
  },
  {
    id: 'platform-cloud',
    title: {
      'pt-BR': 'Platform & Cloud',
      'en-US': 'Platform & Cloud',
    },
    items: ['Docker', 'Azure', 'AWS'],
  },
]

const projectsDefinition: PortfolioProjectDefinition[] = [
  {
    id: 'aws-image-upload',
    title: {
      'pt-BR': 'AWS Image Upload',
      'en-US': 'AWS Image Upload',
    },
    description: {
      'pt-BR':
        'API para upload e gerenciamento de imagens com integração à AWS S3, construída com Spring Boot e preparada para deploy containerizado.',
      'en-US':
        'API for uploading and managing images with AWS S3 integration, built with Spring Boot and ready for containerized deployment.',
    },
    techStack: ['Java', 'Spring Boot', 'AWS S3', 'Docker'],
    businessImpact: {
      'pt-BR':
        'Upload direto ao S3 com URLs pré-assinadas, expondo endpoints REST para integração com front-ends e outros serviços; base para fluxos de mídia em aplicações web.',
      'en-US':
        'Direct uploads to S3 with pre-signed URLs, exposing REST endpoints for front-end and service integration; foundation for media workflows in web applications.',
    },
    repoUrl: 'https://github.com/rafaelsousapereira/aws-image-upload',
  },
  {
    id: 'spring-security-jwt',
    title: {
      'pt-BR': 'Spring Security com JWT',
      'en-US': 'Spring Security with JWT',
    },
    description: {
      'pt-BR':
        'API REST protegida com Spring Security e autenticação stateless baseada em JWT (access + refresh tokens), com chaves RSA e fluxo OAuth2 Resource Server.',
      'en-US':
        'REST API secured with Spring Security and stateless JWT-based authentication (access + refresh tokens), with RSA keys and an OAuth2 Resource Server flow.',
    },
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'OAuth2'],
    businessImpact: {
      'pt-BR':
        'Implementação de autenticação e autorização stateless, com validação de tokens assinados e proteção de endpoints por escopo; modelo reaproveitável para aplicações corporativas.',
      'en-US':
        'Stateless authentication and authorization with signed-token validation and scope-based endpoint protection; reusable blueprint for enterprise applications.',
    },
    repoUrl: 'https://github.com/rafaelsousapereira/spring-security-jwt',
  },
  {
    id: 'app-auth-keycloak',
    title: {
      'pt-BR': 'Integração com Keycloak (OAuth2)',
      'en-US': 'Keycloak Integration (OAuth2)',
    },
    description: {
      'pt-BR':
        'Aplicação Spring Boot com autenticação e autorização integradas ao Keycloak via OAuth2/OpenID Connect, demonstrando o fluxo completo de identity provider.',
      'en-US':
        'Spring Boot application with authentication and authorization integrated with Keycloak via OAuth2/OpenID Connect, demonstrating the full identity provider flow.',
    },
    techStack: ['Java', 'Spring Boot', 'OAuth2', 'Keycloak'],
    businessImpact: {
      'pt-BR':
        'Centralização de identidade e SSO usando Keycloak como IdP, reduzindo superfície de credenciais e habilitando gestão unificada de usuários, papéis e clientes OAuth2.',
      'en-US':
        'Identity centralization and SSO using Keycloak as IdP, reducing credential surface and enabling unified management of users, roles, and OAuth2 clients.',
    },
    repoUrl: 'https://github.com/rafaelsousapereira/app_auth_keycloak',
  },
  {
    id: 'email-notification',
    title: {
      'pt-BR': 'Email Notification Service',
      'en-US': 'Email Notification Service',
    },
    description: {
      'pt-BR':
        'Microsserviço para envio de notificações por e-mail, com configuração de templates e integração SMTP, preparado para uso assíncrono em fluxos de eventos.',
      'en-US':
        'Microservice for sending email notifications, with template configuration and SMTP integration, ready for asynchronous use in event-driven flows.',
    },
    techStack: ['Java', 'Spring Boot', 'Spring Mail', 'Gradle'],
    businessImpact: {
      'pt-BR':
        'Desacopla o envio de e-mails das aplicações de negócio, servindo como ponto único de notificação transacional com configuração isolada de providers e templates.',
      'en-US':
        'Decouples email delivery from business applications, acting as a single point for transactional notifications with isolated provider and template configuration.',
    },
    repoUrl: 'https://github.com/rafaelsousapereira/email-notification',
  },
  {
    id: 'unit-test-api',
    title: {
      'pt-BR': 'API com Testes Unitários',
      'en-US': 'API with Unit Tests',
    },
    description: {
      'pt-BR':
        'API REST em Spring Boot com cobertura de testes unitários usando JUnit e Mockito, com foco em regras de negócio, validações e tratamento de exceções.',
      'en-US':
        'REST API in Spring Boot with unit test coverage using JUnit and Mockito, focused on business rules, validations, and exception handling.',
    },
    techStack: ['Java', 'Spring Boot', 'JUnit', 'Mockito'],
    businessImpact: {
      'pt-BR':
        'Demonstra a aplicação de testes automatizados como parte do ciclo de desenvolvimento, com cobertura de serviços, validações e cenários de erro; base para integração contínua confiável.',
      'en-US':
        'Demonstrates the application of automated tests as part of the development cycle, with coverage of services, validations, and error scenarios; foundation for reliable continuous integration.',
    },
    repoUrl: 'https://github.com/rafaelsousapereira/unit-test-api',
  },
]

const articlesDefinition: PortfolioArticleDefinition[] = [
  {
    id: 'facilitando-criacao-dtos-java-records',
    title: {
      'pt-BR': 'Facilitando a criação de DTOs com Java Records',
      'en-US': 'Simplifying DTO creation with Java Records',
    },
    url: 'https://www.linkedin.com/pulse/facilitando-cria%C3%A7%C3%A3o-de-dtos-com-java-record-rafael-sousa-pereira-/',
    source: {
      'pt-BR': 'LinkedIn',
      'en-US': 'LinkedIn',
    },
  },
]

const experiencesDefinition: ExperienceDefinition[] = [
  {
    id: 'capgemini',
    company: 'Capgemini',
    role: {
      'pt-BR': 'Desenvolvedor Backend Java Sênior',
      'en-US': 'Senior Backend Java Developer',
    },
    startYear: 2025,
    endYear: {
      'pt-BR': 'Presente',
      'en-US': 'Present',
    },
    summary: {
      'pt-BR':
        'Atuação no desenvolvimento e evolução de sistemas financeiros distribuídos, com foco em arquitetura de software, integração entre serviços e construção de soluções orientadas a eventos para ambientes de alta criticidade.',
      'en-US':
        'Working on the development and evolution of distributed financial systems, focused on software architecture, service integration, and event-driven solutions for mission-critical environments.',
    },
    responsibilities: [
      {
        'pt-BR':
          'Projeto e desenvolvimento de serviços backend em arquiteturas distribuídas',
        'en-US':
          'Design and development of backend services in distributed architectures',
      },
      {
        'pt-BR':
          'Implementação de integrações e fluxos assíncronos entre sistemas corporativos',
        'en-US':
          'Implementation of integrations and asynchronous flows between corporate systems',
      },
      {
        'pt-BR':
          'Evolução de soluções orientadas a eventos com foco em escalabilidade e resiliência',
        'en-US':
          'Evolution of event-driven solutions focused on scalability and resilience',
      },
      {
        'pt-BR':
          'Atuação em práticas de confiabilidade, observabilidade e sustentação de sistemas críticos de negócio',
        'en-US':
          'Work on reliability, observability, and support practices for business-critical systems',
      },
    ],
  },
  {
    id: 'mobiis',
    company: 'Mobiis',
    role: {
      'pt-BR': 'Desenvolvedor Backend Java',
      'en-US': 'Backend Java Developer',
    },
    startYear: 2024,
    endYear: {
      'pt-BR': '2025',
      'en-US': '2025',
    },
    summary: {
      'pt-BR':
        'Atuação no desenvolvimento de soluções para logística e automação comercial, com foco em backend, integrações entre sistemas e evolução de plataformas corporativas.',
      'en-US':
        'Work on solutions for logistics and commercial automation, focused on backend, system integrations, and evolution of corporate platforms.',
    },
    responsibilities: [
      {
        'pt-BR':
          'Desenvolvimento de serviços backend e APIs para suportar processos de logística e automação comercial',
        'en-US':
          'Development of backend services and APIs to support logistics and commercial automation processes',
      },
      {
        'pt-BR':
          'Implementação e manutenção de integrações entre sistemas internos e parceiros externos',
        'en-US':
          'Implementation and maintenance of integrations between internal systems and external partners',
      },
      {
        'pt-BR':
          'Participação na evolução de arquiteturas orientadas a serviços e fluxos de integração de dados',
        'en-US':
          'Participation in the evolution of service-oriented architectures and data integration flows',
      },
      {
        'pt-BR':
          'Suporte à modernização de sistemas legados e estabilidade de integrações críticas de negócio',
        'en-US':
          'Support for legacy system modernization and stability of business-critical integrations',
      },
    ],
  },
]

const heroDefinition: HeroContentDefinition = {
  name: 'Rafael Sousa Pereira',
  role: {
    'pt-BR': 'Engenheiro Backend',
    'en-US': 'Senior Backend Java Engineer',
  },
  subtitle: {
    'pt-BR':
      'Especializado em Java 21, Spring Boot e arquitetura de software.',
    'en-US':
      'Specialized in software architecture, distributed systems, and event-driven solutions.',
  },
  summary: {
    'pt-BR':
      'Desenvolvo plataformas backend para sistemas financeiros e tecnologia de varejo, com foco em microservices, mensageria (RabbitMQ), integrações de sistemas e arquiteturas distribuídas.',
    'en-US':
      'Experience building and evolving corporate platforms for the financial, logistics, and retail sectors — designing scalable solutions, critical integrations, and high-availability services for mission-critical environments.',
  },
  currentCompany: {
    name: 'Capgemini',
    period: {
      'pt-BR': '2025 - Presente',
      'en-US': '2025 - Present',
    },
    summary: {
      'pt-BR':
        'Desenvolvimento de soluções financeiras, REST APIs e microservices com Java 21, Spring Boot e RabbitMQ.',
      'en-US':
        'Development of financial solutions, distributed architectures, corporate integrations, and event-driven flows focused on scalability, resilience, and operational reliability.',
    },
  },
  previousCompany: {
    name: 'Mobiis',
    period: {
      'pt-BR': '2024 - 2025',
      'en-US': '2024 - 2025',
    },
    summary: {
      'pt-BR':
        'Soluções de logística e automação com Java, integrações distribuídas e foco em confiabilidade operacional.',
      'en-US':
        'Solutions for logistics and commercial automation, with focus on backend, system integrations, and evolution of corporate platforms.',
    },
  },
  focus: [...techFocus],
}

const aboutDefinition: AboutContentDefinition = {
  description: {
    'pt-BR':
      'Engenheiro de Software com foco em desenvolvimento backend, arquitetura de software e sistemas distribuídos. Experiência na construção de plataformas corporativas, integrações entre sistemas e soluções orientadas a eventos para os setores financeiro, logístico e varejista, com ênfase em escalabilidade, resiliência e confiabilidade operacional.',
    'en-US':
      'Software engineer focused on backend development, software architecture, and distributed systems. Experience building corporate platforms, system integrations, and event-driven solutions for the financial, logistics, and retail sectors, with an emphasis on scalability, resilience, and operational reliability.',
  },
}

const seoDefinition: SeoContentDefinition = {
  title: {
    'pt-BR': 'Rafael Sousa Pereira | Engenheiro Backend',
    'en-US': 'Rafael Sousa Pereira | Senior Backend Engineer',
  },
  description: {
    'pt-BR':
      'Engenheiro Backend — Java 21, Spring Boot, RabbitMQ, PostgreSQL, Docker e Azure. Foco em integrações entre sistemas e arquiteturas distribuídas para soluções financeiras e varejo.',
    'en-US':
      'Senior Backend Engineer — Java 21, Spring Boot, RabbitMQ, PostgreSQL, Docker and Azure. Focused on system integrations and distributed architectures for financial and retail solutions.',
  },
  keywords: [
    'Rafael Sousa Pereira',
    'Senior Backend Engineer',
    'Java 21',
    'Spring Boot',
    'RabbitMQ',
    'PostgreSQL',
    'Docker',
    'Azure',
    'AWS',
  ],
}

const socialMedia: SocialMediaContent = {
  url: {
    linkedin: 'https://www.linkedin.com/in/rafael-sousa-pereira-/',
    github: 'https://github.com/rafaelsousapereira/',
  },
}

const personDefinition: PersonContentDefinition = {
  name: heroDefinition.name,
  shortName: 'Rafael',
  sirName: '',
  position: heroDefinition.role,
  description: heroDefinition.summary,
}

function isLocalizedString(value: unknown): value is Record<Locale, string> {
  if (value === null || typeof value !== 'object') return false
  const record = value as Record<string, unknown>
  return (
    typeof record['pt-BR'] === 'string' && typeof record['en-US'] === 'string'
  )
}

function resolveValue(value: unknown, locale: Locale): unknown {
  if (Array.isArray(value)) return value.map((v) => resolveValue(v, locale))
  if (isLocalizedString(value)) return value[locale]
  if (value !== null && typeof value === 'object') {
    const record = value as Record<string, unknown>
    const out: Record<string, unknown> = {}
    for (const key of Object.keys(record)) {
      out[key] = resolveValue(record[key], locale)
    }
    return out
  }
  return value
}

function resolveLocalized<T>(definition: T, locale: Locale): Resolve<T> {
  return resolveValue(definition, locale) as Resolve<T>
}

const resolveAllForLocale = (locale: Locale): SiteContent => ({
  hero: resolveLocalized(heroDefinition, locale),
  about: resolveLocalized(aboutDefinition, locale),
  technicalStack: technicalStackDefinition.map((g) =>
    resolveLocalized(g, locale),
  ),
  certifications: [],
  experiences: experiencesDefinition.map((e) => resolveLocalized(e, locale)),
  projects: projectsDefinition.map((p) => resolveLocalized(p, locale)),
  articles: articlesDefinition.map((a) => resolveLocalized(a, locale)),
  seo: resolveLocalized(seoDefinition, locale),
  person: resolveLocalized(personDefinition, locale),
  socialMedia,
})

const siteContentByLocale: Record<Locale, SiteContent> = {
  'pt-BR': resolveAllForLocale('pt-BR'),
  'en-US': resolveAllForLocale('en-US'),
}

export function getSiteContent(locale: Locale): SiteContent {
  return siteContentByLocale[locale]
}

export default siteContentByLocale
