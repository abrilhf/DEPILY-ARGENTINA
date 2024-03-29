import { Helmet } from "react-helmet"
import CardsProduct from "../components/CardsProduct"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import productos from "../assets/productos.json";

function HomePage(){
    useEffect(() => {
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
    
    return (
        <div className="home">
            <Helmet>
            <title>Depily</title>
            </Helmet>

            <section className="portada-principal">
                <div>
                {productos.productos.slice(0, -1).map((producto, index) => (
                    <Link to={`/productos/${producto.id}`} key={index}>
                        <img src={producto.images[0]} alt={producto.nombre}/>
                    </Link>
                ))}
                </div>
            </section>

            <section className="info">
                <div className="info2" data-aos="fade-up">
                    <img src="../img/home/cera.jpg" className="img1 img-fluid " alt=""/>
                    <img src="../img/home/mujer-depi.jpg" className="img2 img-fluid " alt=""/>
                    <div>
                        <h2>Piel Suave, Sin Esfuerzo</h2>
                        <p>Descubre la magia de la depilación en casa con nuestras avanzadas máquinas. Experimenta la suavidad duradera y la comodidad de una piel sin vello desde la comodidad de tu hogar. Transforma tu rutina de belleza con tecnología de precisión y resultados impecables. ¡Tu piel merece lo mejor!</p>
                        <Link to={"/productos"}>Saber más</Link>
                    </div>
                </div>

                <div className="info3" data-aos="fade-up">
                    <img src="../img/home/cera-profesional.jpg" className="img1 img-fluid " alt=""/>
                    <img src="../img/home/profesional.jpg" className="img3 img-fluid " alt=""/>
                    <div>
                        <h2>Rendimiento Excepcional, Resultados Profesionales</h2>
                        <p>Eleva tu arte de la depilación con nuestras herramientas diseñadas para profesionales exigentes. Experimenta la potencia, precisión y eficiencia que necesitas para lograr resultados impecables en cada sesión. Confía en la excelencia para destacar en tu práctica profesional. La depilación nunca ha sido tan efectiva y eficiente.</p>
                        <Link to={"/productos"}>Saber más</Link>
                    </div>
                </div>
            </section>

            
            <section className="productsHome" data-aos="fade-up">
                <h2>Nuestros productos</h2>
                <CardsProduct></CardsProduct>
            </section>
            <section className="clientes" data-aos="fade-up" id="opiniones">
                <h2>¿Por qué los clientes aman a Depily?</h2>
                    <div className="opiniones">
                        <div>
                            <div className="stars"></div>
                            <p>Súper práctico. Me gusta el color y el sistema de filtrado de mucho más sencillo de lo que me imaginaba. Súper práctico y al final del día más económico.</p>
                            <p>-Paula Chavez.</p>
                        </div>

                        <div>
                            <div className="stars"></div>
                            <p>Muy conforme, un producto de excelente calidad. Supero mis espectativas. Totalmente recomendado.</p>
                            <p>-Jorge Martinez.</p>
                        </div>

                        <div>
                            <div className="stars"></div>
                            <p>Excelente producto. Capacidad optima. Muy buenos materiales y control de temperatura con buen funcionamiento.</p>
                            <p>-Lucía Guerrera.</p>
                        </div>
                    </div>
                </section>


                <section className="contact" data-aos="fade-up" id="contacto">
                    <h2>Contacto</h2>
                    <p>¡Conectate con nosotros! Descubre nuestros derretidores de cera depilatoria y recibe atención personalizada. En Depily, estamos aquí para hacer que tu experiencia de depilación sea excepcional.</p>

                    <form action="mailto:abrilhf123@gmail.com" method="post" encType="text/plain">
                        <label htmlFor="text">Consulta</label>
                        <textarea name="text" id="text" cols="30" rows="10"></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </section>
        </div>
    )
}

export default HomePage