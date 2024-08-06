import '../css/header.css'

import Navbar from './Navbar'

function Header() {
  return (
   
    <header className='header'>
        <p className='header__banner text-white flex justify-center items-center h-6 xl:text-lg '>MÁS PUBLICIDAD! <span className='font-bold'> SUBSCRÍBETE A NUESTRA NEWSLETTER </span><a className='pl-2' href="https://impactacomunicacion.com/"> Clic aquí</a></p>
           <Navbar/>
        
        <section className='header__section'>
            <div className='header__gradient1'></div>
            <h2 className='text-white font-bold text-xl pt-32 md:text-5xl md:absolute md:bottom-0 lg:text-5xl lg:mb-20 lg:p-10 xl:text-7xl p-6'>A veces,<br/> somos<br/> gente<br/> normal</h2>
            <div className='header__gradient2'></div>
        </section>
    </header>
        
    
  )
}

export default Header