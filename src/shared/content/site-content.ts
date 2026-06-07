import type { Experience } from '@/domain/entities/experience'

export type AboutContent = {
  titles: [string, string]
  description: string
}

export type PortfolioProject = {
  id: string
  title: string
  description: string
  techStack: string[]
  businessImpact: string
}

export type PortfolioArticle = {
  id: string
  title: string
  url: string
}

export const about: AboutContent = {
  titles: ['Sobre mim', 'Experiência Profissional'],
  description:
    'Sou backend engineer focado em construir APIs confiáveis, integrações bem definidas e sistemas escaláveis. Atuo com Java, Spring Boot, mensageria e cloud para entregar soluções que equilibram performance, manutenibilidade e impacto de negócio.',
}

export const experiences: Experience[] = [
  {
    id: 'capgemini',
    company: 'Capgemini',
    role: 'Backend Engineer',
    startYear: 2024,
    endYear: 'Present',
    summary:
      'Desenvolvimento de soluções para o setor financeiro com Java 21, Spring Boot, REST APIs, microservices, RabbitMQ e Azure.',
  },
  {
    id: 'mobiis',
    company: 'Mobiis',
    role: 'Backend Engineer',
    startYear: 2021,
    endYear: 2024,
    summary:
      'Desenvolvimento de soluções logísticas com Spring Boot, PostgreSQL, Docker e integrações em nuvem.',
  },
]

export const projects: PortfolioProject[] = [
  {
    id: 'financial-ops-platform',
    title: 'Financial Ops Platform',
    description:
      'Plataforma de backend para processamento e rastreio de operações financeiras com foco em consistência, observabilidade e resiliência.',
    techStack: ['Java 21', 'Spring Boot', 'REST APIs', 'RabbitMQ', 'Azure'],
    businessImpact:
      'Apoiou a redução de retrabalho operacional e melhorou a previsibilidade de integrações no fluxo financeiro.',
  },
  {
    id: 'logistics-integration-hub',
    title: 'Logistics Integration Hub',
    description:
      'Camada de integração para orquestrar eventos logísticos, sincronizar dados entre sistemas e simplificar o fluxo entre parceiros.',
    techStack: ['Spring Boot', 'PostgreSQL', 'Docker', 'Cloud Integrations'],
    businessImpact:
      'Diminuiu o tempo de integração entre sistemas e aumentou a confiabilidade do processamento de pedidos e entregas.',
  },
  {
    id: 'dto-record-toolkit',
    title: 'DTO Record Toolkit',
    description:
      'Conjunto de utilitários e exemplos para simplificar a criação de DTOs em Java com Records, reduzindo boilerplate em serviços internos.',
    techStack: ['Java Records', 'Spring Boot', 'REST APIs', 'JUnit 5'],
    businessImpact:
      'Acelerou a padronização de contratos de API e reduziu o custo de manutenção de objetos de transporte.',
  },
]

export const articles: PortfolioArticle[] = [
  {
    id: 'facilitando-criacao-dtos-java-records',
    title: 'Facilitando a criação de DTOs com Java Records',
    url: 'https://www.linkedin.com/pulse/facilitando-cria%C3%A7%C3%A3o-de-dtos-com-java-record-rafael-sousa-pereira-/',
  },
]

export default {
  about,
  experiences,
  projects,
  articles,
}
