type MetadataType = {
  metadata: {
    about: {
      titles: string[]
      description: string
      experience: string[]
    }
  }
}

export const TableExperience = ({ metadata }: MetadataType) => {
  return (
    <>
      <table className="table-fixed">
        <caption className="caption-top text-3xl text-center font-extrabold uppercase mb-4">
          {metadata.about.titles[1]}
        </caption>

        <tbody>
          {metadata.about.experience.map((exp, index) => (
            <tr className="hover:bg-slate-700/20 cursor-pointer" key={index}>
              <td className="p-2 text-2xl max-[425px]:text-xl font-medium">{exp.substring(0, 29)}</td>
              <td className="p-2 text-2xl max-[425px]:text-xl font-light">{exp.substring(29)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}