import Carousel from 'react-bootstrap/Carousel';
import '../../index.css';

export function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-50 img-responsive"
          src="imgs/submarino.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="d-flex justify-content-end align-items-center">
            <div>
              <h3>Paseo Submarino</h3>
              <p>Nuestro compromiso es brindar una experiencia completa para toda la familia.</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 img-responsive"
          src="imgs/tiburones.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
         <div className="d-flex justify-content-end align-items-center">
            <div>
              <h3>Nadar con Tiburones</h3>
              <p>Una actividad que seguramente te dejará con recuerdos inolvidables.</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-50 img-responsive"
          src="imgs/tortuga.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="d-flex justify-content-end align-items-center">
            <div>
              <h3>Sostenibilidad y la conservación marina</h3>
              <p>Ofrecemos programas de adopción de tortugas marinas.</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}