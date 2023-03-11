import icon from "../img/icon1.png"
import icon2 from "../img/icon2.png"
import icon3 from "../img/icon3.png"
function Home() {
  return (
    <div>
      <section class="contenedor">
        <div class="iconos">
            <div class="icono">
                 <img  src={icon} alt="imagen icono" />
                <h3>Analiza tus radiografías de forma precisa</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa delectus,
                    fuga blanditiis reprehenderit iusto accusamus laudantium magni voluptate placeat ducimus doloremque,
                    officia, perspiciatis quasi sequi quisquam necessitatibus quod cupiditate soluta?</p>
            </div>
            <div class="icono">
            <img  src={icon2} alt="imagen icono" />
                <h3>Ahorra tiempo para dar diagnósticos</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa delectus,
                    fuga blanditiis reprehenderit iusto accusamus laudantium magni voluptate placeat ducimus doloremque,
                    officia, perspiciatis quasi sequi quisquam necessitatibus quod cupiditate soluta?</p>
            </div>
            <div class="icono">
            <img  src={icon3} alt="imagen icono" />
                <h3>Conoce la visión del proyecto</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa delectus,
                    fuga blanditiis reprehenderit iusto accusamus laudantium magni voluptate placeat ducimus doloremque,
                    officia, perspiciatis quasi sequi quisquam necessitatibus quod cupiditate soluta?</p>
            </div>
        </div>
    </section>

    <section class="sobre-IA">
        <div class=" contenedor informacion-IA">
            <div class="texto-informacion">
                <h2 class="titulo-informacion degradado-verde">Sobre la IA</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur
                    architecto atque nesciunt ratione quae ullam, blanditiis neque eum explicabo labore
                    officiis ab sit dolore possimus eius recusandae expedita. Doloribus.</p>
            </div>
        </div>
    </section>

    <main class="contenedor redirigir-login">
        <h3 class="text-center degradado-verde header-redirigir-login">Antes de continuar...</h3>
        <div class="listado-redirigir-login">
            <div class="login ir-login">
                <h3>Es necesario iniciar sesión o registrarte</h3>
               <button className="button-login"> Iniciar sesión</button>
            </div>
            
        </div>
    </main>
    </div>
  )
}

export default Home
