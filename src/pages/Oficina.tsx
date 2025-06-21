import { Link } from 'react-router'
import { BibleRandom, RandomCat, Title } from '../components'
import ArticSolo from '../components/ArticSolo'

const Oficina = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="grid place-items-center p-5 ">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <div className="mx-auto w-full">
            <Title text="A oficina da tágide" color="purple" />
            <hr className="border-t-10 md:border-t-12 lg:border-t-15 border-purple-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0 lg:pt-0 lg:mt-6  w-full " />
          </div>

          <p className="text-l px-1 text-justify mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            molestiae temporibus quae animi illo mollitia labore id accusantium
            magni. Nulla, expedita! Earum molestiae ea explicabo laborum quo
            aspernatur adipisci officia! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
            <br></br>
          </p>

          <ArticSolo />
          <p className="text-l px-1 text-justify mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id
            excepturi fugit quia obcaecati aut accusantium eligendi mollitia
            quas blanditiis tempora sint expedita odit cupiditate culpa, eius
            earum? Tempore, voluptatem! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
            <Link to="/oficina">Oficina</Link>
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
export default Oficina
