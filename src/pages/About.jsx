import { BibleRandom, RandomCat } from '../components'
import ArticSolo from '../components/ArticSolo'

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="grid place-items-center p-5 ">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <h1 className="text-6xl  text-red-500 text-right md:text-7xl lg:text-8xl mb-2 pb-2 lg:mb-0 lg:pb-0">
            O museu da tágide
          </h1>
          <hr className="border-t-15 border-red-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0  w-full " />

          <p className="text-l px-1 text-justify mb-0 ">
            O museu da tágide serve para mostrar algumas das colecções feitas
            através da curadoria dos nossos visitantes.
          </p>
          <ArticSolo />
          <p className="text-l px-1 text-justify mb-0 ">
            Inicialmente concebida como uma central de APIs para me ajudar a
            conceber uns versos, ideias que ficou mais ou menos concretizada em
            exercício (link)
          </p>

          <ArticSolo />
          <p className="text-l px-1 text-justify mb-0">
            Nesta zona os visitantes podem consultar o nosso arquivo e procurar
            de acordo com diversos critérios e classificações. Também poderão
            ver com mais detalhe algumas das curadorias passadas.
          </p>

          <ArticSolo />
          <p className="text-l px-1 text-justify mb-0"></p>
          <RandomCat />
          <BibleRandom />
          <p className=" ">
            A esta zona chamamos de arquivo pois as pessoas podem vir explorar,
            guardar artigos e tirar notas acerca do que forem encontrando.
            Também podem submeter as suas colecções para que possam ser exibidas
            na zona do museu.
          </p>
        </article>
        <h1 className=" text-6xl m-4">A tágide é um exercício de escrita</h1>
        <h1 className=" text-6xl m-4">
          A tágide é uma galeria e uma biblioteca, de livros e sons
        </h1>
        <h1 className=" text-6xl m-4">A tágide inspira-se em si mesma </h1>
        <h1 className=" text-6xl m-4">A tágide é uma central de APIs </h1>
        <p className=" text-2xl m-4">
          A importância do arquivo é inquestionável, sendo também importante
          poder tornar esses arquivos disponíveis. <br></br>Felizmente para nós,
          diversas organizações têm vindo a fazer esse esforço na forma de APIs.
        </p>
        <div className="grid grid-cols-1 ">
          <RandomCat />
          <BibleRandom />
        </div>
      </div>
    </section>
  )
}
export default About
