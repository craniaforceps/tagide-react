import { Link } from 'react-router'
import { BibleRandom, RandomCat } from '../components'
import ArticSolo from '../components/ArticSolo'

const Museu = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="grid place-items-center p-5 ">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <div className="mx-auto w-full">
            <h1 className="text-5xl tracking-wide text-blue-500 text-right align-right md:text-6xl lg:text-7xl mb-2 pb-2 lg:mb-0 lg:pb-0 ">
              O museu da <br></br>tágide
            </h1>
            <hr className="border-t-10 md:border-t-12 lg:border-t-15 border-blue-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0 lg:pt-0 lg:mt-6  w-full " />
          </div>

          <p className="text-l px-1 text-justify mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            atque. Eum, provident aperiam. Consequuntur porro tenetur aut cumque
            eos inventore aspernatur, possimus culpa illo voluptates, quas
            molestias! Distinctio, quidem libero!
          </p>

          <ArticSolo />
          <p className="text-l px-1 text-justify mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            adipisci et libero nemo asperiores odit ratione totam quaerat
            molestias sit aspernatur optio, aliquid aliquam quasi nesciunt vel
            consequuntur. Dolores, at! <Link to="/oficina">Oficina</Link>
          </p>

          <div className="grid grid-cols-1 ">
            <RandomCat />
            <BibleRandom />
          </div>
        </article>
      </div>
    </section>
  )
}
export default Museu
