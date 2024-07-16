import { Building2 } from "lucide-react"

type MetadataType = {
  id: number
  metadata: {
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
}

export const ListExperienceComponent = ({ id, metadata }: MetadataType) => {

  return (
    <>
      <span className="w-10 h-10 rounded-full mb-0">
        <Building2 size={35} strokeWidth={1.5} absoluteStrokeWidth  />
      </span>
      <div className="text-xl font-medium text-white">
        {metadata.about.experience.map((company) => (
          <>
            <div>{company.companies[id]}</div>
            {metadata.about.experience.map((rule) => (
              <div className="text-lg text-gray-500">{rule.rules[id]}</div>
            ))}
          </>
        ))}
      </div>
    </>
  )
}
