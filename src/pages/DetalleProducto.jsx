import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productos from "../assets/productos.json";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DetalleProducto() {  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { id } = useParams();
  const producto = productos.productos.find((p) => String(p.id) === id);

  const [imagenActual, setImagenActual] = useState(0);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }



  const settingsCarrusel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: imagenActual,
  };

  const generarEnlaceWhatsApp = () => {
    const telefono = '541132486162';
    const mensaje = `¡Hola! Me interesa el producto "${producto.nombre}".`;
    const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(enlaceWhatsApp, '_blank');
  };

  
  return (
    <section className="detalleProduct container">
      <Helmet>
        <title>Detalle de {producto.nombre}</title>
      </Helmet>
      <div className="infoProduct">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <button onClick={generarEnlaceWhatsApp}>Contactar por WhatsApp</button>
        <Link to={"/productos"}><ion-icon name="arrow-back-outline"></ion-icon> Volver</Link>
      </div>
      <div className="imagenes">
        <Slider 
        key={imagenActual} 
        {...settingsCarrusel} className="imagen-carrusel">
          {producto.images.map((imagen, index) => (
            <div key={index}>
              <img
                src={imagen}
                alt={`Imagen ${index + 1} de ${producto.nombre}`}
      
              />
            </div>
          ))}
        </Slider>      
        <div className="galeria">
          {producto.images.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`Imagen ${index + 1} de ${producto.nombre}`}
              style={{ maxWidth: "120px", maxHeight: "120px", margin: "5px", cursor: "pointer" }}
              onClick={() => setImagenActual(index)}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

export default DetalleProducto;