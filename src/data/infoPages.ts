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
}
