import { useNavigate } from "react-router-dom"
import icon from "../img/icon1.png"
import icon2 from "../img/icon2.png"
import icon3 from "../img/icon3.png"

function Home() {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
      }
  return (
    <div>
      <section className="contenedor">
        <div className="iconos">
            <div className="icono">
                 <img  src={icon} alt="imagen icono" />
                <h3>Analiza tus radiografías</h3>
                <p>Con la ayuda de la AI, ahora es posible analizar y diagnosticar posibles patógenos en los dientes de forma automática usando las radiográfias periapicapicales.
                </p>
            </div>
            <div className="icono">
            <img  src={icon2} alt="imagen icono" />
                <h3>Ahorra tiempo para dar diagnósticos</h3>
                <p>Con la implementación de la AI, ahorra tiempo dando un diagnóstico basado en las radiografías, permitiendo así 
                    aprovechar el tiempo al máximo.
                </p>
            </div>
            <div className="icono">
            <img  src={icon3} alt="imagen icono" />
                <h3>Conoce la visión del proyecto</h3>
                <p>A un futuro, se espera que el proyecto pueda crecer, el modelo empleado para dar diagnósticos pueda expandirse y así permitir
                    no solo dar diagnósticos de radiografías periapicales si no dar diagnósticos de todo tipo de radiografías.     
                 </p>
            </div>
        </div>
    </section>

    <section className="sobre-IA">
        <div className=" contenedor informacion-IA">
            <div className="texto-informacion">
                <h2 className="titulo-informacion degradado-verde">Sobre la AI</h2>
                <p>IA en odontología puede ayudar a los dentistas a ofrecer diagnósticos más precisos y personalizados,
                     mejorar la eficiencia y la calidad del tratamiento, y brindar una experiencia más cómoda y conveniente para los pacientes.</p>
            </div>
        </div>
    </section>

    <main className="contenedor redirigir-login">
        <h2 className="text-center degradado-verde header-redirigir-login">Antes de continuar...</h2>
        <div className="listado-redirigir-login">
            <div className="login ir-login">
                <h3>Es necesario iniciar sesión o registrarte</h3>
               <button className="button-login" onClick={handleClick}> Iniciar sesión</button>
            </div>
            
        </div>
    </main>
    </div>
  )
}

export default Home
