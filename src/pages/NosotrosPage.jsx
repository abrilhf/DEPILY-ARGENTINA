import { Helmet } from "react-helmet";
import CarouselNosotros from "../components/CarouselNosotros";
import { useEffect } from "react";

function NosotrosPage() {
    
    useEffect(() => {
        // Desplazar la página hacia arriba al montar el componente
        window.scrollTo(0, 0);
    }, []);
    
    return(
        
    <section className="nosotros">
            <Helmet>
            <title>Sobre Nosotros - Depily</title>
            </Helmet>
            <div className="seccion-portada-nosotros">
                <div className="portada-nosotros container">
                    <h1>depily</h1>
                        <p><span>Somos <em>líderes en Estética Depilatoria en Argentina.</em></span></p> 
                        <p className="fase-portada-nosotros">Comprometidos día a día con la excelencia y la innovación que necesita tu piel.</p>
                </div>
            </div>

    <div className="descripcion-nosotros">
        <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="texto-nosotros p-4">
                            <h2><span>Depily</span>, nuestra historia: </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores obcaecati similique, ad veniam inventore placeat eum fugiat aut voluptate excepturi illo consectetur blanditiis rem cupiditate sapiente impedit aliquam soluta?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur corrupti nostrum numquam ipsam veritatis quidem, alias quisquam voluptas laborum! Nulla quam nisi corporis nemo voluptates quisquam eius animi commodi.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora doloribus modi itaque nihil natus quod in soluta quas. Quibusdam fugit architecto, ipsum adipisci provident qui impedit sequi aperiam voluptatem incidunt!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias repudiandae animi officia reiciendis. Maxime officia ea perferendis laborum. Minus quasi aspernatur magni hic necessitatibus quisquam unde commodi aliquam porro cupiditate?
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

    <div className="container valores-empresa">
        <div className="row">
        <h3>Valores fundamentales de nuestra empresa:</h3>
            <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores veniam dolor voluptatibus necessitatibus enim officia possimus dignissimos, iusto totam ab molestiae nemo minima placeat, quisquam officiis quidem commodi cum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime inventore, aperiam pariatur accusamus ad numquam quas similique, tenetur id vero soluta, quibusdam nemo dolor consequuntur quisquam. Consectetur corporis perferendis inventore!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui voluptate dolores, voluptates inventore vel cum mollitia esse voluptatem nam id sequi odio ratione dolore quidem recusandae facilis nobis magni.
                    </p>
            </div>
        </div>
    </div>

    <div className="descripcion-nosotros">
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
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis ut doloremque itaque nisi fugit, quae quos est aliquam incidunt quis dolorum modi, quia ipsum natus, fugiat hic enim quam?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sint inventore qui illo dolores, mollitia nemo officia et cupiditate, debitis facere molestiae, fugiat ab placeat vitae quidem quia accusantium ad.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nobis. Ratione, eaque nemo? Odio in quas, magni ad tenetur dolor illo quo esse sapiente animi porro ea quasi quisquam cum?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis iusto impedit nemo accusantium voluptate aperiam molestiae corporis, dolorum porro, aliquam quos reiciendis est in! Pariatur adipisci dolorem unde nihil iste!</p> 
                    </div>
                </div>
        </div>
    </div>

</section>

    );

}

export default NosotrosPage