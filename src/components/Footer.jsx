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
                            <li>Productos</li>
                            <li>Nosotros</li>
                            <li>Blog</li>
                            <li>Opiniones</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Información</h2>
                        <ul>
                            <li>Contacto</li>
                        </ul>   
                    </div>
                </div>

                <p>&copy; 2023 Depily. Todos los derechos reservados.</p>
            </footer>
    )
}

export default Footer