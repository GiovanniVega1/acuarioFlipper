import React from "react";
import "../../normalize.css";
import "../stryleSheet/styles.css"

export const Contact = () => {
  return (
    <>
    <section>
      <h1>Contacto</h1>
      <form class="formulario">
                <fieldset>
                    <legend>Contactános llenando todos los campos</legend>

                    <div class="contenedor-campos">
                        <div class="campo">
                            <label>Nombre</label>
                            <input class="input-text" type="text" placeholder="Tu Nombre"/>
                        </div>

                        <div class="campo">
                            <label>Teléfono</label>
                            <input class="input-text" type="tel" placeholder="Tu Teléfono"/>
                        </div>

                        <div class="campo">
                            <label>Correo</label>
                            <input class="input-text" type="email" placeholder="Tu Email"/>
                        </div>
                
                        <div class="campo">
                            <label>Mensaje</label>
                            <textarea class="input-text"></textarea>
                        </div>
                    </div>

                    <div class="alinear-derecha flex">
                        <input class="boton w-sm-100" type="submit" value="Enviar"/>
                    </div>
                </fieldset>
            </form>
    </section>
    </>
  ) 
};
