import { Carousel } from 'react-bootstrap';

function CarouselNosotros() {
  return (
    <Carousel data-bs-theme="dark" style={{ width: '100%', maxHeight: '100vh', overflow: 'hidden' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/nosotros/depilacion-ceja.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/nosotros/depilacion-axila.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../img/nosotros/depilacion-pierna.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselNosotros;