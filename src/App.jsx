import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import NosotrosPage from "./pages/NosotrosPage";
import Productos from "./pages/Productos";
import {Route, Routes} from "react-router-dom";
import NavBarDepily from "./components/Navbar";
import "./css/estilos.css";
import Footer from "./components/Footer";
import DetalleProducto from "./pages/DetalleProducto";
import DetalleBlog from "./pages/DetalleBlog";

function App() {
    return (
        <div>

        <>
            
            <NavBarDepily></NavBarDepily>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/blog/:id" element={<DetalleBlog />} />
                <Route path="/nosotros" element={<NosotrosPage/>}/>
                <Route path="/productos" element={<Productos/>}/>
                <Route path="/productos/:id" element={<DetalleProducto/>}/>
            </Routes>
            
            <Footer></Footer>
            

            </>
            


        </div>
    )
}

export default App