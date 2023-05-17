import Carousel from 'react-bootstrap/Carousel';

function SliderImages() {
  return (
    <div>
      <Carousel style={{height: "40%", width: "100%"}} fade variant='dark'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1683610055704_urbanemusicconcertabhishekkulkarnidesktop.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1684241755888_shorfestdesktop.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
