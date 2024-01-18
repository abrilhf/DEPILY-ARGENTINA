import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function CarouselHome() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <picture>
          {/* Imagen para pantallas grandes */}
          <source media="(min-width: 426px)" srcSet="../img/portada-principal-mobile.jpg" />

          {/* Imagen para pantallas pequeñas */}
          <img
            className="d-block w-100 img-fluid"
            src="../img/portada-principal.jpg"
            alt="First slide"
          />
        </picture>
        <Carousel.Caption className='calentadorSlide'>
          <div>
            PRODUCTOS
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <picture>
          {/* Imagen para pantallas grandes */}
          <source media="(min-width: 426px)" srcSet="../img/portada1-depily.jpg" />

          {/* Imagen para pantallas pequeñas */}
          <img
            className="d-block w-100 img-fluid"
            src="../img/depily-home-mobile.jpg"
            alt="First slide"
          />
        </picture>
        <Carousel.Caption className='calentadorSlide'>
          <h2>Calentador de cera profesional</h2>
          <p className='calentadorP'>Resistente a <span>altas temperaturas</span> y con una capacidad de <span>800cc</span></p>
          <Link to={"/productos"}>Ver más</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="../img/portada2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='car-2'>
          <h2>Cuidamos tu piel</h2>
          <p className='calentadorP'>Nuestros productos te cuidan y cuidan tu piel, dejándola con brillo y suavidad</p>
          <Link to={"/productos"}>Ver más</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="../img/portada3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Amplia tus posibilidades</h2>
          <p className='calentadorP'> Apto para uso profesional </p>
          <Link to={"/productos"}>Ver más</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;