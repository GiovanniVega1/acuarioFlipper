import React from "react";
import "../../normalize.css";

export const Comments = () => {
    return (
      <section>
        <h3>Comentarios</h3>
        <h2>Formulario de Comentarios</h2>
        <p>¡Queremos conocer tu opinión! Por favor, déjanos tus comentarios en las siguientes categorías:</p>
        <br /> <br />
  
        <form>
          <label htmlFor="exhibiciones">Exhibiciones y Habitantes Marinos:</label>
          <textarea id="exhibiciones" name="exhibiciones" rows="4" cols="50"></textarea>
  <br /> <br />
          <label htmlFor="experiencias">Experiencias y Servicios:</label>
          <textarea id="experiencias" name="experiencias" rows="4" cols="50"></textarea>
          <br /> <br />
  
          <label htmlFor="educacion">Educación y Programas Educativos:</label>
          <textarea id="educacion" name="educacion" rows="4" cols="50"></textarea>
          <br /> <br />
  
          <label htmlFor="sostenibilidad">Sostenibilidad y Conservación:</label>
          <textarea id="sostenibilidad" name="sostenibilidad" rows="4" cols="50"></textarea>
          <br /> <br />
  
          <input type="submit" value="Enviar Comentarios" />
        </form>
      </section>
      
    );
  };
  