import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import productos from "../assets/productos.json";
import { Link } from 'react-router-dom';

function CardsProduct() {
  return (
    <CardGroup>
      {productos.productos.map((producto, index) => (
      <Card key={index}>
        <Link to={`/productos/${producto.id}`}>
        <Card.Img variant="top" src={producto.images[0]} />
        </Link>
        <Card.Body>
          <Card.Title className='text-center'>{producto.nombre}</Card.Title>
        </Card.Body>
      </Card>
      ))}
    </CardGroup>
  );
}

export default CardsProduct;