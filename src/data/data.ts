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
      Apaixonado por desenvolvimento web e música boa, formado pela Universidade São Francisco (USF) de Campinas - Campus Swift, em 2021.
      Com experiência na área de logística, onde trabalhei por quase 10 anos, em 2021 fiz a transição de carreira para área de tecnologia, adquirindo experiências como, desenvolvedor trainee, júnior e atualmente como freelancer, com foco no desenvolvimento web, Web Services (Serviços Web) e API's REST/SOAP.
      Habilidade em HTML, CSS, JavaScript e Java; Com objetivo de criar designers minimalistas, responsivos, criar API's robustas e escalaveis.
      Experiência em Java, Spring Boot e Node.js, como Frameworks para Back-End e para Front-End com React.js, Styled Components e Tailwind CSS e utilizo TypeScript como suporte adicional.
      Proativo, sempre buscando novos desafios e conhecimentos, me mantendo atualizado com as tendências do mercado e tecnologias mais recentes, com muita vontade de aprender.
      Sempre mantendo-me atualizado com as tendências do mercado e tecnológicas mais recentes.
    `,
    experience: [
      "Desenvolvedor Web Full Stack, Freelancer - (11/2023-Atual)", 
      "Desenvolvedor Full Stack Jr, BHUT Soluções em Tecnologia LTDA - (08/2022-02/2023)", 
      "Programador Java Trainee,    Arius Automação e Programação LTDA - (06/2021-09/2021)"
    ]
  }
}