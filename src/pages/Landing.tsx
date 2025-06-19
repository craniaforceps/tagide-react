import { Link } from 'react-router'
import {
  ArticGallery,
  BibleRandom,
  EuropeanaGallery,
  FbiGallery,
  GitaLibrary,
  PoemDisplay,
  RandomCat,
  Title,
  Weather,
  XenocantoDisplay,
  Navbar,
} from '../components'
import ArticSolo from '../components/ArticSolo'

const Landing = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="grid place-items-center p-5 ">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <div className="mx-auto w-full">
            <h1 className="text-5xl tracking-wide text-gray-500 text-right align-right md:text-6xl lg:text-7xl mb-2 pb-2 lg:mb-0 lg:pb-0 ">
              A tágide
            </h1>
            <hr className="border-t-10 md:border-t-12 lg:border-t-15 border-gray-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0 lg:pt-0 lg:mt-6  w-full " />
          </div>
          <div className="grid grid-cols-1 ">
            <RandomCat />
            <BibleRandom />
          </div>
          <p className="text-l px-1 text-justify mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt
            veritatis dignissimos eius facilis ipsa dolor suscipit reiciendis
            sit modi impedit numquam voluptatum accusamus similique quaerat,
            culpa error recusandae et.
          </p>
        </article>
      </div>
    </section>
  )
}
export default Landing
