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
      Apaixonado por desenvolvimento web e música, sou desenvolvedor desde 2021, quando me formei em Análise e Desenvolvimento de Sistemas pela Universidade São Francisco de Campinas - São Paulo e experiência profissional na área, atualmente como
      desenvolvedor freelancer. Com objetivo de criar designers minimalistas, responsivos e criar APIs robustas e escalaveis utilizo a tecnologias para resolver problemas do dia a dia de pessoas.
    `,
    experience: [
      "Desenvolvedor Web          Freelancer (09/2023 - Atualmente)", 
      "Desenvolvedor Full Stack   BHUT Soluções em Tecnologia LTDA. (08/2022 - 02/2023)", 
      "Desenvolvedor Java           Arius Automação e Programação LTDA. (06/2021 - 09/2021)",      
    ]
  }
}