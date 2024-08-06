import SpermIco from './SpermIco'
import BrainIco from './BrainIco'
import BeerIco from './BeerIco'
import PinIco from './PinIco'

function Section_articles() {
  return (
    <section className="section flex flex-col p-6 pt-10 md:grid md:grid-cols-2 gap-6 lg:p-28 2xl:gap-0 2xl:p-40 justify-items-center ">
      <article className="relative h-72 lg:h-80 mb-6 lg:w-80 xl:w-96 2xl:h-96">
        <span className="section__number">1</span>
        <div className="article1 articles flex items-center justify-center">
          <BrainIco/>
        </div>
        <h3 className="title text-black text-2xl">CREATIVIDAD SIN LÍMITES PARA IMPULSAR TU MARCA</h3>
        <p className="text-xs">
        Transformamos ideas en <span    className="font-bold">experiencias    inolvidables,</span> creando campañas que    capturan la esencia de tu marca y resuenan   profundamente con tu audiencia.
        </p>
      </article>

    <article className="relative h-72 lg:h-80 mb-6 lg:w-80 xl:w-96 2xl:h-96">
      <span className="section__number">2</span>
      <div className="article2 articles flex items-center justify-center ">
        <SpermIco />
      </div>
      <h3 className='title text-black  text-2xl'>AGILIDAD Y EFICIENCIA EN CADA PROYECTO</h3>
      <p className='text-xs'><span className='font-bold'>Respuesta rápida y eficiente</span> para un mercado en constante cambio, adaptándonos a tus necesidades y superando tus expectativas con cada entrega.</p>
    </article>
    <article className="relative h-72 lg:h-80 mb-6 lg:w-80 xl:w-96 2xl:h-96">
      <span className="section__number">3</span>
      <div className="article3 articles flex items-center justify-center">
        <PinIco/>
      </div>
      <h3 className='title text-black  text-2xl '>TECNOLOGÍA PARA RESULTADOS ÓPTIMOS</h3>
      <p className='text-xs'>Innovación tecnológica para potenciar tus campañas publicitarias, utilizando <span className='font-bold'>las herramientas más avanzadas</span> para alcanzar y superar tus objetivos.</p>
    </article>
    <article className="relative h-72 lg:h-80 mb-6 lg:w-80 xl:w-96 2xl:h-96">
      <span className="section__number">4</span>
      <div className="article4 articles flex items-center justify-center ">
        <BeerIco/>
      </div>
      <h3 className='title text-black  text-2xl '>EQUIPO DE EXPERTOS APASIONADOS Y DEDICADOS</h3>
      <p className='text-xs'>Profesionales apasionados dedicados a impulsar tu marca, combinando talento y experiencia para ofrecer <span className='font-bold'>resultados excepcionales y transformar tu visión en realidad.</span></p>
    </article>
    </section>
  )
}

export default Section_articles