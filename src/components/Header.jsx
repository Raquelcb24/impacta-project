import '../css/header.css'
import logo from '../images/logo-impacta.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

function Header() {
  return (
   
    <header className='header '>
        <p className='header__banner text-white flex justify-center items-center h-6 xl:text-lg '>MÁS PUBLICIDAD! <span className='font-bold'> SUBSCRÍBETE A NUESTRA NEWSLETTER </span><a className='pl-2' href="https://impactacomunicacion.com/"> Clic aquí</a></p>
        <div className='flex justify-around xl:justify-between xl:pl-8 xl:pr-8'>
            <a href="https://impactacomunicacion.com/" target='_blank'><img className='w-18 h-4 mt-6 md:mt-2 xl:w-32 xl:h-auto' src={logo} alt="logo" /></a>
            <nav className='header__nav md:flex-row md:justify-between md:items-center '>
                <div className='flex flex-row text-sm gap-20 p-2 items-center md:ml-10 md:gap-40 xl:text-xl'>
               
                 <ul className='flex flex-col items-end md:flex-row md:gap-4 xl:mr-96'>
                    <li className='header_list'><a href="https://impactacomunicacion.com/">Nosotros</a></li>
                    <li className='header_list'><a href="https://impactacomunicacion.com/servicios">Servicios</a></li>
                    <li className='header_list'><a href="https://impactacomunicacion.com/proyectos">Proyectos</a></li>
                    <li className='header_list'><a href="https://impactacomunicacion.com/#contacto">Contacto</a></li>
                </ul>
                <ul className='flex flex-row items-center gap-2  '>
                    <li className="icon"><a href="https://www.instagram.com/impactabranding/" target='_blank'><FaInstagram/></a></li>
                    <li className="icon"><a href="https://www.facebook.com/impactabranding" target='_blank'><FaFacebook/></a></li>
                </ul>
            </div>
           
        </nav>
        </div>
        <section className='header__section'>
            <div className='header__gradient1'></div>
            <h2 className='text-white font-bold text-lg md:text-5xl md:absolute md:bottom-0 lg:text-5xl lg:p-10 xl:text-7xl p-6'>A veces,<br/> somos<br/> gente<br/> normal</h2>
            <div className='header__gradient2'></div>
        </section>
    </header>
        
    
  )
}

export default Header