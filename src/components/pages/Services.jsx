import React from "react";
//import "../../normalize.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UncontrolledExample } from "../carrusel/ExampleCarouselImage";
import '../../index.css';

export const Services = () => {
  return (
    <>
      <UncontrolledExample />

      <section id="boletos" class="boletos bg-verde">
      <h2>Nuestros Servicios</h2>
      <p>
        En Aquarium Flipper, nuestro compromiso es brindar una experiencia completa para toda la familia. Además de nuestros emocionantes espectáculos y programas educativos, ofrecemos un tranquilo "Paseo Submarino" en nuestro submarino especialmente diseñado. Este paseo te llevará a las profundidades del océano sin mojarte, donde podrás observar a las criaturas marinas en su hábitat natural a través de ventanas panorámicas.
      </p>
      <br /><br />
      <p>
        ¿Eres un amante de la aventura? Nuestra experiencia "Nadar con Tiburones" es perfecta para ti. Bajo la supervisión de nuestros instructores certificados, podrás sumergirte en un tanque con tiburones y experimentar la emoción de estar cerca de estos magníficos depredadores. Una actividad que seguramente te dejará con recuerdos inolvidables.
      </p>
      <br /><br />
      <p>
        Para los más pequeños, ofrecemos fiestas de cumpleaños temáticas en el acuario. Celebra tu día especial rodeado de peces exóticos y amigos marinos. Nuestros paquetes de fiesta incluyen un recorrido privado, actividades interactivas y una torta de cumpleaños submarina. ¡Será una celebración que tus hijos no olvidarán!
      </p>
      <br /><br />
      <p>
        En Aquarium Flipper, también estamos comprometidos con la sostenibilidad y la conservación marina. Ofrecemos programas de adopción de tortugas marinas, donde los visitantes pueden contribuir directamente a la preservación de estas especies en peligro de extinción. Cada vez que nos visitas, ayudas a proteger nuestros océanos y su vida marina.
      </p>
      <br /><br />
      <p>
        Aquarium Flipper se enorgullece de ser un centro de investigación y conservación. Participamos en proyectos de investigación científica para contribuir al entendimiento de los ecosistemas marinos y su conservación. Nuestros visitantes pueden unirse a nuestros científicos en expediciones de recolección de datos o aprender más sobre nuestros esfuerzos en nuestros talleres de conservación.
      </p>
      </section>
    </>
  );
};
