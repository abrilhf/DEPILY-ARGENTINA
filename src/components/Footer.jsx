import { Link } from "react-router-dom"

function Footer() {
    return(
            <footer>
                <div className="logo"></div>
                <div className="redes">
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-pinterest"></i>
                </div>
                
                <div className="map">
                    <div>
                        <h2>Compañía</h2>
                        <ul>
                            <li><Link to={"/productos"}>Productos</Link></li>
                            <li><Link to={"/nosotros"}>Nosotros</Link></li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                            <li><a href="#opiniones">Opiniones</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Información</h2>
                        <ul>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>   
                    </div>
                </div>

                <p>&copy; 2023 Depily. Todos los derechos reservados.</p>
            </footer>
    )
}

export default Footer