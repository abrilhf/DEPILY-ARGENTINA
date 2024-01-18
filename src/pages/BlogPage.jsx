import { useEffect } from "react";
import entradas from "../assets/entradas.json";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


function BlogPage() {
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

  const entrada = entradas.entradas[entradas.entradas.length - 1]; // Obtén la última entrada
  return (
    <div className="blog">
        <header>
            <div className="seccion-portada-blog">
                <div className="portada-blog container">
                    <h1>Nuestro Blog</h1>
                        <p><em>En <span className="depily">DEPILY</span>, queremos brindarte toda la información posible.</em><p className="fase-portada-blog">Para que puedas estar informada día a día y vivas la mejor experiencia.</p></p> 
                        
                </div>
            </div>
    </header>
<main>
    <div className="container mt-4">
        <div className="ultima-novedad" data-aos="fade-up">
            <h2 className="fs-1 mt-5 mb-5 autor">Última Novedad del Blog</h2>
            {entrada && (
                <div className="custom-card-minimal mb-4">
                    <div className="row no-gutters">
                    <div className="col-md-6">
                        <img
                        className="card-img"
                        src={`../img/blog/${entrada.img}`}
                        alt={`Imagen de ${entrada.titulo}`}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                        <h3 className="mb-2 mt-2 titulo-blog p-1 ">{entrada.titulo}</h3>
                        <p className="card-text">
                            <small className="text-muted p-1">Fecha: {entrada.fecha}</small>
                        </p>
                        <h2 className="subtitulo-blog p-1">{entrada.subtitulo}</h2>
                        <p className="card-text">
                            <ReactMarkdown>
                            {truncateWithEllipsis(entrada.texto, 270)}
                            </ReactMarkdown>
                        </p>
                        <p className="card-text autor">{entrada.autor}</p>
                        <div className="d-flex justify-content-end m-3 ">
                            <Link to={`/blog/${entrada.id}`} className="card-link btn-blog">Ver más</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </div>


      <h2 className="fs-1 mt-5 mb-5 autor" data-aos="fade-up">Entradas Anteriores del Blog </h2>
        <div className="row">
        {entradas.entradas.map((entrada) => (
            <div key={entrada.id} className="col-md-6 blogs">
              <div className="custom-card-minimal mb-4" data-aos="fade-up">
                <img
                  className="card-img-top"
                  src={`../img/blog/${entrada.img}`} 
                  alt={`Imagen de ${entrada.titulo}`}
                />
                <p className="card-text texto-blog">
                    <small className="text-muted p-1 ">Fecha: {entrada.fecha}</small>
                  </p>
                <div className="card-body body-blog p-4">
                  <h2 className="titulo-blog" >{entrada.titulo}</h2>
                  <h3 className="mb-2 subtitulo-blog">
                    {entrada.subtitulo}
                  </h3>
                  <p className="card-text">
                  <ReactMarkdown>
                        {truncateWithEllipsis(entrada.texto, 200)}
                      </ReactMarkdown>
                  </p>
                  <div className="d-flex justify-content-end m-3 ">
                    <Link to={`/blog/${entrada.id}`} className="card-link btn-blog">Ver más</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </main>
    </div>
  );
}

function truncateWithEllipsis(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  const truncatedText = text.slice(0, maxLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    // Si encontramos un espacio antes de los 270 caracteres, truncamos en ese espacio.
    return truncatedText.slice(0, lastSpaceIndex) + " ...";
  } else {
    // Si no hay un espacio antes de los 270 caracteres, simplemente truncamos.
    return truncatedText + " ...";
  }
}

export default BlogPage;
