import { useParams, Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import entradas from "../assets/entradas.json";
import  { useEffect } from "react";


function DetalleBlog() {
  const { id } = useParams();
  const entradaId = parseInt(id, 10); // Convierte el id de la URL a un número entero
  const entrada = entradas.entradas.find((e) => e.id === entradaId);

  useEffect(() => {
    // Ajustar la posición de desplazamiento al principio cuando el componente se monta
    window.scrollTo(0, 0);
  }, [id]); 


  if (!entrada) {
    // Manejo de error si no se encuentra la entrada
    return <div>No se encontró la entrada.</div>;
  }

  return (
    <section className="container mt-4 blog-detalle">
    <div className="row">
      <div className="col-md-6">
        <img
          className="card-img-top"
          src={`../img/blog/${entrada.img}`}
          alt={`Imagen de ${entrada.titulo}`}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1 className="mb-4 titulo-blog-detalle">{entrada.titulo}</h1>
        <p className="card-text">
          <small className="text-muted p-1">Fecha: {entrada.fecha}</small>
        </p>
      </div>
      <div className="row mt-4">
        <div>
          <div className="card-body">
            <h3 className="mb-2 mt-2 subtitulo-blog-detalle">{entrada.subtitulo}</h3>
            <p className="card-text">
              <ReactMarkdown>{entrada.texto}</ReactMarkdown>
            </p>
            <p>Producto recomendado: <a href={entrada.link} target="_blank" rel="noopener noreferrer">Ver aquí</a></p>
            <p className="card-text autor depily">{entrada.autor}</p>
            <div className="d-flex justify-content-end m-3 "> <Link to={`/blog`} className="card-link btn-blog">Volver</Link></div>
          </div>
        </div>
        </div>
    </div>
  </section>
  );
}

export default DetalleBlog;
