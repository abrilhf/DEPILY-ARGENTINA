import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function CarouselHome() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src="../img/portada1-depily.jpg"
          alt="First slide"
        />
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
          <p>Nuestros productos te cuidan y cuidan tu piel, dejándola con brillo y suavidad</p>
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
          <p> Apto para uso profesional </p>
          <Link to={"/productos"}>Ver más</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;