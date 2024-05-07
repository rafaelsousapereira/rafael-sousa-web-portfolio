
export const PageNotFound = () => {
  return (
    <>
      <p className="flex justify-center items-center mt-16 text-zinc-300 font-black text-6xl">Erro 404</p>
      <p className="flex justify-center items-center mt-5 max-[320px]:text-center text-zinc-400 font-black text-4xl">
        Página não encontrada.
      </p>
      <p className="mt-5 text-center max-[320px]:text-center text-zinc-400 font-black text-3xl">Tente novamente.</p>
    </>
  )
}