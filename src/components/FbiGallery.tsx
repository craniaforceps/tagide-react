import { useFbiWantedList } from '../hooks/useFbiWantedList'

const FbiGallery = () => {
  const { data, isLoading, error } = useFbiWantedList()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  const fbi = data

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
      {fbi.map((item, index) => {
        const { author, date, id, imageUrl, description } = item

        function stripHtml(htmlString) {
          const tempDiv = document.createElement('div')
          tempDiv.innerHTML = htmlString
          return tempDiv.textContent || tempDiv.innerText || ''
        }
        return (
          <div key={index} className="grid gap-4 align-top">
            <div>
              <h2 className="text-lg text-center font-semibold m-2">
                {author}
              </h2>
              {/* <h2 className="text-xs tracking-wide text-justify  ">
                    {stripHtml(details)}
                  </h2>
                  <h2 className="text-xs tracking-wide text-justify  ">
                    <span className="underline">reward</span>{' '}
                    {stripHtml(remarks)}
                  </h2> */}
              {/* <h2 className="text-xs tracking-wide text-justify  ">
                    {stripHtml(reward_text)}
                  </h2> */}
              {/* <h2 className="text-xs tracking-wide text-justify  ">
                    eyes:{stripHtml(eyes)} <br /> hair:{stripHtml(hair)}
                    <br /> race:{stripHtml(race)}
                    <br /> weight:{stripHtml(weight)}
                    <a href={url}>Algo</a>
                  </h2> */}

              <img className="h-auto max-w-full rounded-lg " src={imageUrl} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default FbiGallery
