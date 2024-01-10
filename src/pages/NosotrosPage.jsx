import { Helmet } from "react-helmet";
import CarouselNosotros from "../components/CarouselNosotros";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import AOS from 'aos';
import 'aos/dist/aos.css';

function NosotrosPage() {
    
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
    
    return(
        
    <section className="nosotros">
            <Helmet>
            <title>Sobre Nosotros - Depily</title>
            </Helmet>
            <div className="seccion-portada-nosotros">
                <div className="portada-nosotros container">
                    <h1 className="depily-nosotros">depily</h1>
                    <img src="../img/nosotros/depily_logo.png" className="imgDepily img-fluid pb-2 " alt=""/>
                        <p><span>Somos <em>líderes en Estética Depilatoria en Argentina.</em></span></p> 
                        <p className="fase-portada-nosotros">Comprometidos día a día con la excelencia y la innovación que necesita tu piel.</p>
                </div>
            </div>

    <div className="descripcion-nosotros" data-aos="fade-up">
        <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="texto-nosotros p-4">
                            <h2>Valores fundamentales de <span>Depily</span>: </h2>
                            <p>
                            <ReactMarkdown>
                            Nuestra misión es realzar *tu belleza natural* con productos de calidad excepcional. 
                            Cada fundidor de cera **Depily** es más que un dispositivo; es una herramienta diseñada 
                            para proporcionar una *depilación suave y efectiva*, adaptada a tus necesidades únicas. 
                            En el mundo de la estética, nos destacamos por la calidad y la garantía que ofrecemos. 
                            Cada producto **Depily** es resultado de un compromiso inquebrantable con la *excelencia*,
                            respaldado por nuestra *garantía* de satisfacción. Queremos que te sientas segura y hermosa en cada momento.
                            Sabemos que la depilación no es solo un proceso, sino un ritual que refleja tu dedicación a cuidarte a ti misma.
                            **Depily** está aquí para ser tu cómplice en este viaje de belleza. 
                            Confía en nosotros para brindarte productos que se adaptan a tu estilo de vida,
                            celebrando tu feminidad con cada aplicación.
                            </ReactMarkdown>
                            </p>
                        </div>
                    </div>
                <div className="col-md-6">
                    <div className="bg-white d-flex justify-content-center align-items-center">
                    <img src="../img/nosotros/depiladora-set.jpg" alt="Bodegón set de estetica con fundidora de cera"  className="img-fluid"/> 
                    </div>
                </div>
            </div>
        </div>
    </div>

    <CarouselNosotros></CarouselNosotros>

    <div className="descripcion-nosotros pb-5" data-aos="fade-up">
        <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="texto-nosotros">
                        <div className="bg-white d-flex justify-content-center align-items-center">
                            <img src="../img/nosotros/cera-caliente.jpg" alt="Cera caliente para depilación"  className="img-fluid"/> 
                        </div>
                    </div>
                    </div>
                <div className="col-md-6 texto-nosotros p-4">
                <h4>Visión de Futuro: </h4>
                    <p>
                    <ReactMarkdown>
                    En **Depily**, buscamos un futuro donde la belleza y la confianza sean accesibles para todas las *mujeres en Argentina*.
                    No solo somos una marca, sino un compañero en el viaje de cada mujer hacia la autenticidad y el cuidado personal.
                    Queremos llevar nuestros innovadores fundidores de cera a todos los hogares argentinos, 
                    proporcionando una experiencia cómoda y efectiva de depilación.
                    Además, nos esforzamos por expandir nuestra presencia en salones de belleza,
                    colaborando estrechamente con profesionales para ofrecer soluciones de alta calidad.
                    Visualizamos un país donde **Depily** sea sinónimo de confianza y calidad en la depilación,
                    *fomentando la conexión y el empoderamiento de cada mujer*. Estamos comprometidos a hacer realidad esta visión,
                    creando una red de confianza y belleza que abarque toda la nación. 
                    Creemos que todas las mujeres merecen sentirse hermosas y seguras, sin importar dónde se encuentren en Argentina.
                    </ReactMarkdown>
                    </p> 
                    </div>
                </div>
        </div>
    </div>

</section>

    );

}

export default NosotrosPage