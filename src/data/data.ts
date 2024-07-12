type MetadataType = {
  greeting: {
    description: string
  }
  person: {
    name: string
    sirName: string
    position: string
    image: string
    description: string
  }
  socialMedia: {
    url: {
      linkedin: string
      github: string
    }
  }
  about: {
    titles: string[]
    description: string
    experience: string[]
  }
}

export const metadata: MetadataType = {
  greeting: {
    description: 'Bem-vindos, ao meu portfólio!',
  },
  person: {
    name: 'Rafael',
    sirName: 'Sousa Pereira',
    position: 'Desenvolvedor Full-stack',
    image: '.github/avatar.png',
    description:
      'Desenvolvedor com vasta experiência em desenvolvimento de aplicação web escaláveis e responsivas. Sou apaixonado por criar soluções tecnologicas que resolvem problemas reais e que agregam valor aos usuários.',
  },
  socialMedia: {
    url: {
      linkedin: 'https://www.linkedin.com/in/rafael-sousa-pereira-/',
      github: 'https://github.com/rafaelsousapereira/',
    },
  },
  about: {
    titles: ['Sobre mim', 'Experiência Profissional'],
    description: `
      Olá, eu sou Rafael Sousa um desenvolvedor full-stack apaixonado por tecnologia e soluções criativas. Com mais de 3 anos de experiência em desenvolvimento web, tenho trabalhado com diversas tecnologias para criar soluções robustas e escaláveis que atendam às necessidades dos clientes. Eu amo o desafio de encontrar soluções inovadoras e criativas para problemas complexos e estou sempre buscando aprender e crescer como profissional.
    `,
    experience: [
      'Desenvolvedor Web          Freelancer (03/2023 - Atualmente)',
      'Desenvolvedor Full Stack   BHUT Soluções em Tecnologia LTDA. (08/2022 - 02/2023)',
      'Desenvolvedor Java           Arius Automação e Programação LTDA. (06/2021 - 09/2021)',
    ],
  },
}
