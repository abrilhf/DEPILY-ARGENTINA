import { Helmet } from "react-helmet"
import CardsProduct from "../components/CardsProduct"
import CarouselHome from "../components/CarouselHome"
import { useEffect } from "react";
// import Fade from 'react-reveal/Fade';

function HomePage(){
    useEffect(() => {
        // Desplazar la página hacia arriba al montar el componente
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div>
            <Helmet>
            <title>Depily</title>
            </Helmet>
            <CarouselHome></CarouselHome>

            <section className="info">
                <div className="info2">
                    <img src="../img/home/cera.jpg" className="img1" alt=""/>
                    <img src="../img/home/mujer-depi.jpg" className="img2" alt=""/>
                    <div>
                        <h2>Piel Suave, Sin Esfuerzo</h2>
                        <p>Descubre la magia de la depilación en casa con nuestras avanzadas máquinas. Experimenta la suavidad duradera y la comodidad de una piel sin vello desde la comodidad de tu hogar. Transforma tu rutina de belleza con tecnología de precisión y resultados impecables. ¡Tu piel merece lo mejor!</p>
                        <a href="#">Saber más</a>
                    </div>
                </div>

                <div className="info3">
                    <img src="../img/home/cera-profesional.jpg" className="img1" alt=""/>
                    <img src="../img/home/profesional.jpg" className="img3" alt=""/>
                    <div>
                        <h2>Rendimiento Excepcional, Resultados Profesionales</h2>
                        <p>Eleva tu arte de la depilación con nuestras herramientas diseñadas para profesionales exigentes. Experimenta la potencia, precisión y eficiencia que necesitas para lograr resultados impecables en cada sesión. Confía en la excelencia para destacar en tu práctica profesional. La depilación nunca ha sido tan efectiva y eficiente.</p>
                        <a href="#">Saber más</a>
                    </div>
                </div>
            </section>

            
            <section className="productsHome">
                <h2>Nuestros productos</h2>
                <CardsProduct></CardsProduct>
            </section>
            <section className="clientes">
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


                <section className="contact">
                    <h2>Contacto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed illum exercitationem cum nemo minima rerum fuga culpa optio ducimus reiciendis, nihil labore, obcaecati accusamus fugit molestias. Voluptatibus quia id nobis.</p>

                    <form action="#" method="post">
                        <label htmlFor="text">Consulta</label>
                        <textarea name="text" id="text" cols="30" rows="10"></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </section>
        </div>
    )
}

export default HomePage