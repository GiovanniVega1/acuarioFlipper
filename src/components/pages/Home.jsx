import React from "react";
import "../../normalize.css";
import "../stryleSheet/globales.css";
import "../stryleSheet/styles.css";

export const Home = () => {
  return (
    <>
      <div class="portada">
        <div class="contenido-portada">
            <h2>Acuario Flipper</h2> 
            <div class="ubicacion">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC107" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="11" r="3" />
                     <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <p>Guadalajara, Jalisco</p>
            </div>
        </div> 
      </div>

      <div class="contenedor sobre-acuario">
        <div class="imagen">
          <picture>
          <img width={400} height={300} src="imgs/acuario_lobby.jpg" alt="" />
          </picture>
        </div>
        <div class="contenido-acuario">
            <h2>Acuario Flipper</h2>
            <p class="fecha">Julio 2024, Guadalajara, México</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita nulla dignissimos repellendus corporis excepturi enim eum? Tenetur rerum excepturi natus dicta ullam sit, fuga asperiores maxime distinctio rem doloremque?</p>
        </div>
      </div>

      <section id="lineup" class="lineup">
        <h3>Apertura</h3>

        <p class="dia">Viernes 21</p>
        <div class="recorridos-contenedor contenedor">
            <div class="recorrido bg-amarillo">
                <p class="nombre-recorrido">VIP acceso anticipado</p>

                <ul class="calendario">
                    <li>
                        13:00 | <span>Inicio de recorrido</span>
                    </li>
                    <li>
                        14:00 | <span>Expedicion mantarralla</span>
                    </li>
                    <li>
                        15:00 | <span>Zona cotorritos</span>
                    </li>
                    <li>
                        16:00 | <span>Convive con los capibaras</span>
                    </li>
                    <li>
                        17:00 | <span>Obra de teatro</span>
                    </li>
                    <li>
                        18:00 | <span>Fin de recorrido "incluye regalo sorpresa"</span>
                    </li>
                </ul>
            </div> 

            <div class="recorrido bg-verde">
                <p class="nombre-recorrido">Acceso anticipado General</p>

                <ul class="calendario">
                    <li>
                        09:00 | <span>Inicio de recorrido</span>
                    </li>
                    <li>
                        10:00 | <span>Zona cotorritos</span>
                    </li>
                    <li>
                        11:00 | <span>Obra de teatro</span>
                    </li>
                    <li>
                        12:00 | <span>Fin de recorrido "incluye regalo sorpresa"</span>
                    </li>
                </ul>
            </div> 
        </div> 


        <p class="dia">Sábado 22</p>
        <div class="recorridos-contenedor contenedor">
            <div class="recorrido bg-verde">
                <p class="nombre-recorrido">VIP</p>

                <ul class="calendario">
                    <li>
                        13:00 | <span>Inicio de recorrido</span>
                    </li>
                    <li>
                        14:00 | <span>Expedicion mantarralla</span>
                    </li>
                    <li>
                        15:00 | <span>Zona cotorritos</span>
                    </li>
                    <li>
                        16:00 | <span>Convive con los capibaras</span>
                    </li>
                    <li>
                        17:00 | <span>Obra de teatro</span>
                    </li>
                    <li>
                        18:00 | <span>Fin de recorrido</span>
                    </li>
                </ul>
            </div> 

            <div class="recorrido bg-amarillo">
                <p class="nombre-recorrido">General</p>

                <ul class="calendario">
                  <li>
                        09:00 | <span>Inicio de recorrido</span>
                    </li>
                    <li>
                        10:00 | <span>Zona cotorritos</span>
                    </li>
                    <li>
                        11:00 | <span>Obra de teatro</span>
                    </li>
                    <li>
                        12:00 | <span>Fin de recorrido</span>
                    </li>
                </ul>
            </div> 
        </div> 
    </section>

    <section id="boletos" class="boletos bg-verde">
        <h3>Boletos</h3>

        <div class="contenedor contenedor-boletos">
            <div class="basico pase">
                <p class="nombre-pase">Pase VIP</p>
                <header class="pase-header">
                    <p>Incluye</p>
                </header>
                <div class="pase-body">
                    <ul>
                        <li>Acceso a eventos especiales</li>
                        <li>Comida</li>
                        <li>Camisa del Evento</li>
                        <li>Acceso VIP</li>
                    </ul>
                </div>
                <footer class="pase-footer">
                    <p>$400 VIP acceso anticipado, $200 VIP</p>
                </footer>
            </div>
            <div class="premium pase">
                <p class="nombre-pase">Pase 2 Días</p>
                <header class="pase-header">
                    <p>Incluye</p>
                </header>
                <div class="pase-body">
                    <ul>
                        <li>Acceso a algunos eventos</li>
                        <li>Acceso al acuario en general</li>
                    </ul>
                </div>
                <footer class="pase-footer">
                    <p>$180 General acceso anticipado, $90 General</p>
                </footer>
            </div>
        </div>
    </section>

    <footer class="site-footer">
        <p>Acuario Flipper</p>
    </footer>
    </>
  );
};