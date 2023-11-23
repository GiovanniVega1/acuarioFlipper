import Carousel from 'react-bootstrap/Carousel';
import '../../index.css';

export function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-50 img-responsive"
          src="imgs/acuario.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="d-flex justify-content-end align-items-center">
            <div className="text-center">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 img-responsive"
          src="imgs/acuario.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
         <div className="d-flex justify-content-end align-items-center">
            <div className="text-center">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-50 img-responsive"
          src="imgs/acuario.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="d-flex justify-content-end align-items-center">
            <div className="text-center">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}