type MetadataType = {
  greeting: {
    description: string
  },
  person: {
    name: string
    sirName: string
    position: string
    image: string
  },
  socialMedia: {
    url: {
      linkedin: string,
      github: string
    }
  },
  about: {
    description: string
  }
}

export const metadata: MetadataType = {
  greeting: {
    description: 'Bem-vindos, ao meu portfólio!'
  },
  person: {
    name: 'Rafael',
    sirName: 'Sousa Pereira',
    position: 'Desenvolvedor Web Full Stack',
    image: '.github/avatar.png'
  },
  socialMedia: {
    url: {
      linkedin: 'https://www.linkedin.com/in/rafael-sousa-pereira-/',
      github: 'https://github.com/rafaelsousapereira/'
    }
  },
  about: {
    description: `
      'Apaixonado por desenvolvimento Web e música, formado pela Universidade São Francisco (USF), de Campinas - Campus Swift em 2021,\n
        
      Com experiência na área de logística, onde trabalhei por quase 10 anos, em 2021 fiz minha transição de carreira para área de tecnologia, onde já tive experiência como desenvolvedor trainee, júnior e atualmente trabalho como desenvolvedor web full stack freelancer.\n

      Habilidade em HTML, CSS, JavaScript e Java; Com objetivo de criar designers minimalistas, responsivos, criar API's robustas e escalaveis.\n
      
      Experiência no uso de frameworks Front-end, como ReactJS e Back-end, como Spring Boot e NodeJS e também usando TypeScript como suporte adicional.\n
      
      Proativo, sempre buscando novos desafios e conhecimentos.\n

      Sempre mantendo-me atualizado com as tendências do mercado e tecnológicas mais recentes.
    `
  }
}