import { BibleRandom, RandomCat } from '../components'
import ArticSolo from '../components/ArticSolo'

const Sobre = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="grid place-items-center p-5 ">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <div className="mx-auto w-full">
            <h1 className="text-5xl tracking-wide text-orange-500 text-right align-right md:text-6xl lg:text-7xl mb-2 pb-2 lg:mb-0 lg:pb-0 ">
              A tágide
            </h1>
            <hr className="border-t-10 md:border-t-12 lg:border-t-15 border-orange-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0 lg:pt-0 lg:mt-6  w-full " />
          </div>
          <p className="text-l px-1 text-justify mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            consequuntur culpa repudiandae illo perspiciatis temporibus,
            dignissimos sint placeat pariatur, ex tempora sed, excepturi unde
            quaerat sit asperiores beatae. Temporibus, labore. Lorem
          </p>
          <ArticSolo />
          <p className="text-l px-1 text-justify mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            consequuntur culpa repudiandae illo perspiciatis temporibus,
            dignissimos sint placeat pariatur, ex tempora sed, excepturi unde
            quaerat sit asperiores beatae. Temporibus, labore. Lorem
          </p>
          <RandomCat />
          <BibleRandom />
        </article>
      </div>
    </section>
  )
}
export default Sobre
