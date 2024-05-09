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
    titles: string[]
    description: string
    experience: string[]
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
    titles: ["Sobre mim", "Experiência Profissional"],
    description: `
      Apaixonado por desenvolvimento web e música boa, formado em Análise e Desenvolvimento de Sistemas pela Universidade São Francisco (USF) de Campinas em 2021.
      Com experiência na área de logística onde trabalhei por mais de 10 anos, entre 2019 e 2021 iniciei minha transição de carreira para área de tecnologia onde atuei como desenvolvedor trainee, júnior e atualmente como freelancer, com foco no desenvolvimento web, API's REST e Web Services.
      Habilidade em front-end como HTML, CSS, JavaScript e React.js; com objetivo de criar designers minimalistas, responsivos e criar APIs robustas e escalaveis utilizo tecnologias back-end como Java, Spring Boot e Node.js no desenvolvimento de APIs e microsserviços e também utilizo TypeScript como suporte adicional.
      Proativo, sempre buscando novos desafios e conhecimentos, me mantendo atualizado com as tendências do mercado e tecnologias mais recentes, com muita vontade de aprender.
    `,
    experience: [
      "Desenvolvedor Web Full Stack, Freelancer - 11/2023 - Atualmente", 
      "Desenvolvedor Full Stack Jr, BHUT Soluções em Tecnologia LTDA - 08/2022 - 02/2023", 
      "Programador Java Trainee,    Arius Automação e Programação LTDA - 06/2021 - 09/2021"
    ]
  }
}