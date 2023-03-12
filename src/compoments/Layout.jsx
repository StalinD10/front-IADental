import { Outlet } from "react-router-dom"
import image from "../img/header.jpg"

function Layout() {
    return (
        <div>
            <div className="header">
                <div className="contenedor contenido-header">
                    <div className="imagen-header">
                        <picture >
                            <img className="imagen-header" loading="lazy" decoding="async" src={image} lazyalt="imagen" />
                        </picture>
                    </div>
                    <div className="texto-header">
                        <p className="tagline-periapical">Diagnósticos automáticos</p>
                        <h1 className="nombre-periapical degradado-verde">Dental IA Radiografías Periapicales</h1>
                        <p className="descripcion-periapical"> Las radiografías ahora pueden ser diagnosticadas de manera automática</p>
                       
                    </div>
                </div>
            </div>
            <Outlet/>
            <footer className="footer">
        <p>Todos los derechos reservados</p>
    </footer>
        </div>
    )
}

export default Layout
