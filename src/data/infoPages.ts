type MetadataType = {
  id: number
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
    experience: [
      {
        companies: string[]
        rules: string[]
      }
    ]
  }
}

export const metadata: MetadataType = {
  id: Number(),
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
      Olá, eu sou Rafael Sousa um desenvolvedor full-stack apaixonado por tecnologia e soluções criativas. Com mais de três anos de experiência em desenvolvimento web, tenho trabalhado com diversas tecnologias para criar soluções robustas e escaláveis que atendam às necessidades dos clientes. Eu amo o desafio de encontrar soluções inovadoras e criativas para problemas complexos e estou sempre buscando aprender e crescer como profissional.
    `,
    experience: [
      {
        companies: ['DEV Freelancer', 'Prestador de Serviços', 'Arius Sistemas'],
        rules: ['Desenvolvedor Web', 'Desenvolvedor Full Stack', 'Desenvolvedor JAVA'],
      }
    ]
  },
}
