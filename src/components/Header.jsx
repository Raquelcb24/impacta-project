import { useState } from 'react';
import '../css/header.css';
import Navbar from './Navbar';
import img1 from '../images/edit-1.webp'
import img2 from '../images/edit-2.webp'
import img3 from '../images/edit-3.webp'
import img4 from '../images/edit-4.webp'

function Header() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [img1, img2, img3, img4]; //array con las imagenes del carrusel. Hacer .map para recorrerlo

    //gestion de botones hacia delante y hacia atrás teniendo en cuenta la poosicion de la img y modificando la variable de estado
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

return (
  <header className='header'>
      <p className='header__banner text-white flex justify-center items-center h-6 xl:text-lg'>
          MÁS PUBLICIDAD! <span className='font-bold'> SUBSCRÍBETE A NUESTRA NEWSLETTER </span>
          <a className='pl-2' href="https://impactacomunicacion.com/"> Clic aquí</a>
      </p>
      <Navbar />
      <section className='header__section'>
          <div className='header__gradient1'></div>
          <h2 className='header__title'>
              A veces,<br /> somos<br /> gente<br /> normal
          </h2>
          <div className='header__gradient2'></div>
          <div className='carousel'>
              <div className='carousel_images' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {images.map((src, index) => (
                      <img key={index} className='carousel_image' src={src} alt={`carousel-image-${index}`} />
                  ))}
              </div>
              <button className="carousel__button carousel__button--prev" onClick={handlePrev}>&#10094;</button>
              <button className="carousel__button carousel__button--next" onClick={handleNext}>&#10095;</button>
          </div>
      </section>
  </header>
);
}

export default Header;
