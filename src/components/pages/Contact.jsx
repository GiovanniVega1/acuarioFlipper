import React, { useState } from "react";
import "../../normalize.css";
import "../stryleSheet/styles.css"

export const Contact = () => {

  return (
    <>
    <section>
        
      <h1>Contacto</h1>
        <p>Bienvenido al Acuario Flipper, un lugar fascinante donde podrás sumergirte en el mundo marino y descubrir la belleza de la vida bajo el agua.</p>
        <br />
        <h2>Ubicación</h2>
        <p>Dirección: Calle Acuática, 123, Ciudad Marítima, CP 56789.</p>
        <br />
        <h2>Horarios</h2>
        <p>Horario de apertura:</p>
        <ul className="list_contact">
            <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
            <li>Sábados y Domingos: 10:00 AM - 8:00 PM</li>
        </ul>
        <br />
        <h2>Exhibiciones y Actividades</h2>
        <br />
        <p>En el Acuario Flipper, podrás disfrutar de una variedad de exhibiciones y actividades emocionantes:</p>
        <ul className="list_contact">
            <li>Alimentación de los tiburones: Todos los días a las 11:00 AM.</li>
            <li>Charlas educativas sobre la conservación marina: Consulta nuestro calendario.</li>
            <li>Paseos en bote con fondo de cristal para observar la vida marina.</li>
            <li>Interacción con delfines: Reserva tu experiencia única.</li>
        </ul>
        <br />
        <p>¡Estamos encantados de escucharte! Puedes contactarnos de las siguientes maneras:</p>
        <ul className="list_contact">
            <li>Correo electrónico: <a href="mailto:info@acuarioflipper.com">info@acuarioflipper.com</a></li>
            <li>Teléfono: +1234567890</li>
            <li>Redes sociales:
                <ul>
                    <li><a href="https://www.facebook.com/AcuarioFlipper" target="_blank">Facebook</a></li>
                    <li><a href="https://twitter.com/AcuarioFlipper" target="_blank">Twitter</a></li>
                </ul>
            </li>
        </ul>
    </section>
    </>
  ) 
};
