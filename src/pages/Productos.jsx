import { useEffect, useState } from "react";
import productos from "../assets/productos.json";
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Productos() {

    useEffect(() => {
        // Desplazar la página hacia arriba al montar el componente
        window.scrollTo(0, 0);

        AOS.init({
            duration: 1000,
            offset: 50, 
            easing: 'ease-in-out', 
        });

        return () => {
            AOS.refresh();
        };
    }, []);
    
    const [hoveredProduct, setHoveredProduct] = useState(null);


    return(

        <section className="productos">        
            <Helmet>
            <title>Nuestros Productos - Depily</title>
            </Helmet>
            <div className="seccion-portada-productos">
                <div className="portada-productos container">
                    <h1>Nuestros Productos</h1>
                </div>
            </div>
            <Row xs={1} md={2}> 
            {productos.productos.map((producto, index) => (
            <Col key={index} data-aos="fade-up">
            <Card>
                <Link to={`/productos/${producto.id}`}>
                <Card.Img variant="top"                     
                    onMouseEnter={() => setHoveredProduct(index)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    src={
                        producto.images && producto.images.length >= 2
                        ? hoveredProduct === index
                            ? producto.images[1]
                            : producto.images[0]
                        : null
                    }
                    alt={`Imagen de ${producto.nombre}`}
                    fluid
                    />
                </Link>
                <Card.Body>
                <Card.Title className="text-center">{producto.nombre}</Card.Title>
                <Link to={`/productos/${producto.id}`} className="btn-productos">Ver más <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                </Card.Body>
            </Card>
            </Col>
            ))}
            </Row>
        </section>
    )
}

export default Productos