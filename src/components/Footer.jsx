import { FaInstagram, FaFacebook } from 'react-icons/fa'
import logo from '../images/logo-azul.png'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className='flex flex-col items-center space-y-2 justify-center leading-relaxed 2xl:text-xl'>
          <h3 className="title">Contacto y Preguntas Frecuentes</h3>
          <ul>
            <li className="list_items ">+ (34) 666 666 666</li>
            <li className="list_items ">FORMULARIO DE <span className="font-bold">CONTACTO</span></li>
            <li className="list_items "><span className="font-bold">PREGUNTAS</span> FRECUENTES</li>
            <li className="list_items ">LIBRO DE RECLAMACIONES</li>
            <li className="list_items ">CONOCE NUESTRA MANERA DE <span className="font-bold">TRABAJAR</span></li>
          </ul>
          <h3 className="text-white">Pago seguro</h3>
          <ul className='flex flex-row items-center gap-4 justify-center leading-relaxed'>
            <li >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" fill="none">
              <path fill="#fff" d="M.5.5h47v31H.5z"/>
              <path fill="#FF5F00" d="M29.36 7.12H18.72v17.77h10.64V7.12Z"/>
              <path fill="#EB001B" d="M19.79 16c0-3.5 1.57-6.77 4.21-8.88a10.97 10.97 0 0 0-15.57 1.9 11.49 11.49 0 0 0 1.86 15.87c4 3.2 9.64 3.2 13.71 0A11.6 11.6 0 0 1 19.8 16Z"/>
              <path fill="#F79E1B" d="M40.93 23v-.37h.15v-.07h-.36v.07h.14l.07.37Zm.72 0v-.44h-.14l-.15.3-.14-.3h-.14V23h.07v-.37l.14.3h.07l.15-.3V23h.14ZM41.93 16c0 6.27-4.92 11.3-11.07 11.3-2.5 0-4.93-.88-6.86-2.41a11.48 11.48 0 0 0 0-17.77 10.97 10.97 0 0 1 15.58 1.9A11.15 11.15 0 0 1 41.93 16Z"/>
              <path stroke="#D6D6D6" d="M.5.5h47v31H.5z"/>
              </svg>
            </li>
            <li >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" fill="none">
              <path fill="#fff" d="M.5.5h47v31H.5z"/>
              <path fill="#1434CB" d="M28.25 10.35c-2.43 0-4.6 1.29-4.6 3.66 0 2.71 3.85 2.9 3.85 4.27 0 .57-.64 1.09-1.75 1.09-1.57 0-2.74-.72-2.74-.72l-.5 2.39s1.35.6 3.14.6c2.66 0 4.74-1.34 4.74-3.75 0-2.87-3.86-3.05-3.86-4.32 0-.45.53-.95 1.63-.95 1.24 0 2.26.53 2.26.53l.49-2.31s-1.1-.49-2.66-.49Zm-22.2.18-.07.35s1.02.19 1.94.57c1.19.43 1.27.69 1.47 1.47l2.18 8.55h2.9l4.5-10.94h-2.9l-2.9 7.44-1.17-6.3a1.28 1.28 0 0 0-1.32-1.14H6.04Zm14.09 0-2.28 10.94h2.77l2.27-10.94h-2.76Zm15.46 0c-.67 0-1.03.36-1.29 1l-4.06 9.94h2.91l.56-1.66h3.54l.35 1.66h2.56l-2.24-10.94H35.6Zm.37 2.95.87 4.1h-2.31l1.44-4.1Z"/>
              <path stroke="#D6D6D6" d="M.5.5h47v31H.5z"/>
              </svg>
            </li>
            <li >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" fill="none">
                <path fill="#006FCF" d="M.5.5h47v31H.5z"/>
                <path fill="#fff" d="m37.192 8.332.945-2.62h4.325V26.3h-4.077l-1.506-1.795-1.566 1.795H23.734v-9.565h-3.822l4.78-11.023h4.649l1.122 2.5v-2.5h5.772l.963 2.62h-.006Zm-3.261 1.735-.012-1.054.396 1.054 1.92 5.228h1.908l1.932-5.228.372-1.042V15.3h2.009V7.266h-3.338l-1.519 4.078-.401 1.102-.414-1.102-1.524-4.078h-3.338v8.03h2.009v-5.23Zm-4.325 5.228h2.316l-3.468-8.03h-2.688l-3.485 8.03h2.286l.609-1.548h3.822l.608 1.548Zm-2.912-5.313.396-1.005.395 1.005.816 2.03h-2.422l.815-2.03Zm-1.347 6.759v8h6.575v-1.736h-4.566v-1.397h4.478v-1.729h-4.478v-1.403h4.566V16.74h-6.575Zm13.895 8h2.611l-3.68-4.018 3.68-3.988h-2.57l-2.375 2.602-2.363-2.602h-2.617l3.675 4.018-3.675 3.987h2.54l2.393-2.608 2.38 2.608Zm.992-4.025 2.227 2.307v-4.59l-2.227 2.277v.006Z"/>
                <path stroke="#D6D6D6" d="M.5.5h47v31H.5z"/>
              </svg>
            </li>
            <li >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" fill="none">
              <path fill="#fff" d="M.5.5h47v31H.5z"/>
              <path fill="#253B80" d="m6.93 20.78.17-1.08-.37-.01H4.95L6.2 11.7a.1.1 0 0 1 .03-.06.1.1 0 0 1 .07-.02h3c.98 0 1.67.2 2.03.62.17.2.27.4.32.63.06.23.06.51 0 .86v.24l.17.1c.14.08.25.16.34.26.14.17.24.38.28.63a3.26 3.26 0 0 1-.4 1.95 2.12 2.12 0 0 1-1.38 1.02c-.29.07-.62.11-.98.11h-.23a.7.7 0 0 0-.7.6l-.01.1-.3 1.9v.08l-.03.04H6.93Z"/>
              <path fill="#179BD7" d="m11.97 13.79-.03.18c-.4 2.06-1.75 2.78-3.47 2.78h-.88a.43.43 0 0 0-.42.37l-.45 2.9-.13.83c-.02.14.09.26.22.26h1.56c.19 0 .34-.13.37-.32l.02-.08.3-1.9v-.1a.38.38 0 0 1 .38-.33h.23c1.51 0 2.7-.62 3.04-2.43.14-.75.07-1.38-.31-1.83a1.5 1.5 0 0 0-.43-.33Z"/>
              <path fill="#222D65" d="M11.56 13.62a3.1 3.1 0 0 0-.39-.09c-.23-.04-.5-.05-.77-.05H8.05a.38.38 0 0 0-.37.32l-.5 3.22-.01.1a.43.43 0 0 1 .42-.37h.88c1.72 0 3.07-.72 3.47-2.78l.03-.18a2.09 2.09 0 0 0-.41-.17Z"/>
              <path fill="#253B80" d="M7.68 13.8a.38.38 0 0 1 .37-.32h2.35a4.78 4.78 0 0 1 1.25.17c.11.04.22.08.32.14.12-.77 0-1.28-.4-1.76-.45-.51-1.26-.74-2.29-.74h-3a.43.43 0 0 0-.41.37l-1.25 8.06c-.03.16.1.3.25.3h1.85l.46-3 .5-3.22ZM19.48 13.7h-2.11a.3.3 0 0 0-.3.25l-.85 5.53c-.02.1.07.2.17.2h1.01a.3.3 0 0 0 .3-.25l.22-1.49a.3.3 0 0 1 .3-.25h.66c1.4 0 2.2-.69 2.4-2.05.1-.6.01-1.06-.26-1.4-.3-.35-.83-.54-1.54-.54Zm.24 2.02c-.11.77-.7.77-1.25.77h-.32l.22-1.44a.18.18 0 0 1 .18-.16h.14c.38 0 .74 0 .93.23.11.13.14.33.1.6ZM25.8 15.7h-1.02a.18.18 0 0 0-.17.14l-.05.3-.07-.11c-.22-.33-.7-.44-1.2-.44-1.11 0-2.07.87-2.25 2.08-.1.6.04 1.18.38 1.58.3.37.75.53 1.27.53.9 0 1.4-.6 1.4-.6l-.04.3c-.02.1.06.2.17.2h.91a.3.3 0 0 0 .3-.25l.54-3.53a.18.18 0 0 0-.18-.2Zm-1.42 2c-.1.59-.55.98-1.14.98-.3 0-.53-.1-.68-.27a.89.89 0 0 1-.16-.73c.1-.58.56-1 1.14-1 .29 0 .52.1.67.29a.9.9 0 0 1 .17.73ZM31.18 15.7h-1.01a.3.3 0 0 0-.25.12l-1.4 2.1-.6-2.01a.3.3 0 0 0-.28-.22h-1c-.12 0-.2.12-.16.24l1.12 3.35-1.05 1.52c-.09.12 0 .28.14.28h1.01a.3.3 0 0 0 .25-.13l3.38-4.98c.08-.12 0-.28-.15-.28Z"/>
              <path fill="#179BD7" d="M34.55 13.7h-2.11a.3.3 0 0 0-.3.25l-.85 5.53c-.01.1.07.2.18.2h1.08a.2.2 0 0 0 .2-.17l.25-1.57a.3.3 0 0 1 .29-.25h.66c1.4 0 2.2-.69 2.4-2.05.1-.6.01-1.06-.26-1.4-.3-.35-.83-.54-1.54-.54Zm.24 2.02c-.11.77-.7.77-1.25.77h-.32l.22-1.44a.18.18 0 0 1 .18-.16h.14c.39 0 .75 0 .93.23.11.13.15.33.1.6ZM40.87 15.7h-1.02a.18.18 0 0 0-.17.14l-.04.3-.07-.11c-.22-.33-.71-.44-1.2-.44-1.12 0-2.07.87-2.26 2.08-.1.6.04 1.18.38 1.58.3.37.75.53 1.27.53.9 0 1.4-.6 1.4-.6l-.04.3c-.02.1.06.2.17.2h.91a.3.3 0 0 0 .3-.25l.54-3.53a.18.18 0 0 0-.17-.2Zm-1.41 2c-.1.59-.56.98-1.15.98-.29 0-.52-.1-.68-.27a.9.9 0 0 1-.15-.73c.09-.58.55-1 1.13-1 .29 0 .52.1.67.29a.9.9 0 0 1 .18.73ZM42.06 13.85l-.87 5.63c-.02.1.07.2.18.2h.87a.3.3 0 0 0 .29-.25l.85-5.52a.18.18 0 0 0-.17-.21h-.98a.18.18 0 0 0-.17.15Z"/>
            <path stroke="#D6D6D6" d="M.5.5h47v31H.5z"/>
              </svg>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center space-y-2  justify-center leading-relaxed'>
          <h3 className="title">Nosotros</h3>
          <ul >
            <li className="list_items ">CATEGORÍAS</li>
            <li className="list_items ">NOVEDADES</li>
            <li className="list_items ">OFERTAS</li>
          </ul>
        <h3 className="title">Servicios</h3>
        </div>
        <div className='flex flex-col items-center space-y-2  justify-center leading-relaxed'>
          <h3 className="title">Proyectos</h3>
          <ul >
            <li className="list_items ">CALIDADES</li>
            <li className="list_items ">REVISIONES</li>
            <li className="list_items ">RENOVACIÓN</li>
            <li className="list_items ">VENTAS</li>
          </ul>
        </div>
        <div className='flex flex-col items-center space-y-2  justify-center leading-relaxed'>
          <h3 className="title">Contacto</h3>
          <ul >
            <li className="list_items">FORMULARIO DE CONTACTO</li>
          </ul>
          <h3 className="title">Redes</h3>
          <ul className='flex flex-row items-center space-x-2 justify-center leading-relaxed'>
            <li className=" icon_footer"><a href="https://www.instagram.com/impactabranding/" target='_blank'><FaInstagram/></a></li>
            <li className=" icon_footer"><a href="https://www.facebook.com/impactabranding" target='_blank'><FaFacebook/></a></li>
          </ul>
        </div>
      </footer>
      <a className='logo ' href="https://impactacomunicacion.com/" target='_blank'>
        <img className='w-40' src={logo} alt="logo" />
      </a>
      <p className='copy text-center h-6 xl:text-lg '>© IMPACTA. 2024 </p>
    </>
    
  )
}

export default Footer