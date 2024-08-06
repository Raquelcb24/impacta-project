import { useState } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import logo from '../images/logo-impacta.png';
import { Bars3Icon } from '@heroicons/react/24/outline';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className='navBar 2xl:pl-6 2xl:pr-6'>
                <div className='flex flex-row items-center justify-between p-2 lg:text-xl'>
                    <a href="https://impactacomunicacion.com/" target='_blank' rel='noopener noreferrer'>
                        <img className='w-20 mt-2 lg:w-32' src={logo} alt="logo" />
                    </a>
                    <button 
                        className='block md:hidden p-2'
                        onClick={toggleMenu}>
                        <Bars3Icon className='w-6 h-6'/>
                    </button>
                    <ul 
                    className={`nav_list hidden md:flex flex-row items-center gap-4 bg-white p-2 md:p-0 ${isOpen ? 'block' : 'hidden'}`}
                    onClick={closeMenu}>
                        <li className='nav_list--items'><a href="https://impactacomunicacion.com/">Nosotros</a></li>
                        <li className='nav_list--items'><a href="https://impactacomunicacion.com/servicios">Servicios</a></li>
                        <li className='nav_list--items'><a href="https://impactacomunicacion.com/proyectos">Proyectos</a></li>
                        <li className='nav_list--items'><a href="https://impactacomunicacion.com/#contacto">Contacto</a></li>
                    </ul>
                    {isOpen && (
                        <div className="fixed top-10 right-0 w-40 rounded-lg bg-white z-50 flex flex-col items-center justify-center" onClick={closeMenu}>
                            <div className="w-full max-w-md" onClick={(event) => event.stopPropagation()}>
                                <ul className="flex flex-col items-center gap-4">
                                    <li className='nav_list--items'><a href="https://impactacomunicacion.com/">Nosotros</a></li>
                                    <li className='nav_list--items'><a href="https://impactacomunicacion.com/servicios">Servicios</a></li>
                                    <li className='nav_list--items'><a href="https://impactacomunicacion.com/proyectos">Proyectos</a></li>
                                    <li className='nav_list--items'><a href="https://impactacomunicacion.com/#contacto">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                    )}

                    
                    <ul className='flex flex-row items-center gap-2'>
                        <li className="icon">
                            <a href="https://www.instagram.com/impactabranding/" target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                        </li>
                        <li className="icon">
                            <a href="https://www.facebook.com/impactabranding" target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
