import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardsSlider() {
  return (
    <div style={{background: "lightgrey", padding: "5%"}}>
      <Carousel indicators={false} variant='dark'>
        <Carousel.Item>
        <CardGroup style={{display: "flex", gap: "40px", justifyContent:"space-around"}}>
          <Card className="text-white" style={{height: "300px", width: "300px", borderRadius: "20px"}}>
              <Card.Img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png" alt="Card image" style={{height: "300px", width: "100%", borderRadius: "20px"}}/>
              <Card.ImgOverlay>
              </Card.ImgOverlay>
           </Card>

          <Card className="text-white" style= {{height: "300px", width: "300px", borderRadius: "20px"}}>
              <Card.Img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png" alt="Card image" style={{height: "300px", width: "100%", borderRadius: "20px"}}/>
              <Card.ImgOverlay>
              </Card.ImgOverlay>
          </Card>

          <Card className="text-white" style= {{height: "300px", width: "300px", borderRadius: "20px"}}>
              <Card.Img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png" alt="Card image" style={{height: "300px", width: "100%", borderRadius: "20px"}}/>
              <Card.ImgOverlay>
              </Card.ImgOverlay>
          </Card>         
        </CardGroup>  
        </Carousel.Item>

        <Carousel.Item>

        <CardGroup style={{display: "flex", gap: "40px", justifyContent:"space-around"}}>
          <Card className="text-white" style= {{height: "300px", width: "300px", borderRadius: "20px"}}>
              <Card.Img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png" alt="Card image" style={{height: "300px", width: "100%", borderRadius: "20px"}}/>
              <Card.ImgOverlay>
              </Card.ImgOverlay>
          </Card>

          <Card className="text-white" style= {{height: "300px", width: "300px", borderRadius: "20px"}}>
              <Card.Img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/ipl-collection-202302270454.png" alt="Card image" style={{height: "300px", width: "100%", borderRadius: "20px"}}/>
              <Card.ImgOverlay>
              </Card.ImgOverlay>
          </Card>

          <Card className="text-white" style= {{height: "300px", width: "300px", borderRadius: "20px"}}>
              <Card.Img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png" alt="Card image" style={{height: "300px", width: "100%", borderRadius: "20px"}}/>
              <Card.ImgOverlay>
              </Card.ImgOverlay>
          </Card>         
        </CardGroup> 
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardsSlider;