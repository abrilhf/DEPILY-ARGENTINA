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

  const [isProfessional, setIsProfessional] = useState(null);

  const handleContactTypeChange = (isProfessional) => {
    setIsProfessional(isProfessional);
  };

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
    const telefono = '541151024487';
    const mensaje = `¡Hola! Me interesa el producto "${producto.nombre}".`;
    const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(enlaceWhatsApp, '_blank');
  };

  
  return (
    <div className="detalleProducto">
    <section className="detalleProduct container">
      <Helmet>
        <title>Detalle de {producto.nombre}</title>
      </Helmet>
      <div className="infoProduct">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <div>
          <label className="primer-l">Especifica qué tipo de cliente eres para tener más novedades sobre este producto:</label>
          <div className="tipo-cliente">
            <button
              className={isProfessional === true ? "active" : ""}
              onClick={() => handleContactTypeChange(true)}
            >
              Profesional
            </button>
            <button
              className={isProfessional === false ? "active" : ""}
              onClick={() => handleContactTypeChange(false)}
            >
              Cliente Regular
            </button>
          </div>
        </div>

        {isProfessional !== null && (
          // Mostrar contenido solo cuando se ha seleccionado un tipo de cliente
          <>
            {isProfessional ? (
              // Mostrar opciones de contacto para profesionales (por ejemplo, WhatsApp)
              <p className="contacto-profesional">Si estás interesado en comercializar la linea podes comunicarte por WhatsApp <a onClick={generarEnlaceWhatsApp}>Chat de WhatsApp</a></p>
            ) : (
              // Mostrar formulario de contacto solo para clientes regulares
              <form action="mailto:abrilhf123@gmail.com" method="post">
                <label htmlFor="text">Consulta</label>
                <textarea name="text" id="text" cols="30" rows="10" defaultValue={`¡Hola! Me interesa saber más sobre el producto "${producto.nombre}".`}></textarea>
                <button type="submit" className="form-correo">Enviar por correo electrónico</button>
              </form>
            )}
          </>
        )}
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
                className="img-fluid w-100"
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
              style={{ 
                maxWidth: "120px", 
                maxHeight: "120px", 
                margin: "5px", 
                cursor: "pointer",
              }}// Opacidad reducida para las imágenes no seleccionadas}}
              onClick={() => setImagenActual(index)}
            />
          ))}
        </div>
      </div>

    </section>
    </div>
  );
}

export default DetalleProducto;