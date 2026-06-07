export type Experience = {
  id: string
  company: string
  role: string
  startYear: number
  endYear?: number | 'Present'
  summary?: string
  responsibilities?: string[]
}

export default Experience
