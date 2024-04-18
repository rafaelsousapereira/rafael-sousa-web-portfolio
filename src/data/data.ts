type MetadataType = {
  person: {
    name: string
    sirName: string
    position: string
  },
  description: {
    greeting: string
  }
}

export const metadata: MetadataType = {
  person: {
    name: 'Rafael',
    sirName: 'Sousa Pereira',
    position: 'Desenvolvedor Web Full Stack',
  },
  description: {
    greeting: 'Bem-vindos ao meu portfólio!'
  }
}