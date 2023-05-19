import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background: "rgb(43, 49, 72)", padding: "5%" }}>
      <h2 style={{ color: "white", display: "inline-block" }}>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="premiere-banner" style={{width:"100%"}} />
      </h2>
      <Carousel indicators={false} variant= "dark">
        <Carousel.Item>
          <CardGroup style={{display: "flex", gap: "40px", justifyContent:"space-around"}}>
            <Card className="bg-dark text-white" style={{height: "500px", width: "300px" , borderRadius: "10px"}}>
              <Card.Img variant="top" src="https://www.joblo.com/wp-content/uploads/2022/04/fast-x-poster-1-400x600.jpg" style={{height: "320px", width: "80%" , margin: "40px", borderRadius: "10px", zIndex: "1"}}/>
              <Card.Body>
                <Card.Title>Fast X</Card.Title>
                <Card.Text>
                 Action / Adeventure / Crime / Thrillers
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{height: "500px", width: "300px", borderRadius: "10px"}}>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxNjcuMUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-bcrtrqpgtc-portrait.jpg" style={{height: "320px", width: "80%" , margin: "40px", borderRadius: "10px", zIndex: "1"}}/>
              <Card.Body>
                <Card.Title>The Kerala Story</Card.Title>
                <Card.Text>
                 Drama {" "} 
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{height: "500px", width: "300px", borderRadius: "10px"}}>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMzguMksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-saankmyxpj-portrait.jpg" style={{height: "320px", width: "80%" , margin: "40px", borderRadius: "10px", zIndex: "1"}}/>
              <Card.Body>
                <Card.Title>Guardians of the Galaxy Vol. 3</Card.Title>
                <Card.Text>
                  Action / Adventure/ Comedy / Sci-Fi
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup style={{display: "flex", gap: "40px", justifyContent:"space-around"}}>
            <Card className="bg-dark text-white" style={{height: "500px", width: "300px", borderRadius: "10px"}}>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358731-cwehlaxbzl-portrait.jpg" style={{height: "320px", width: "80%" , margin: "40px", borderRadius: "10px", zIndex: "1"}}/>
              <Card.Body>
                <Card.Title>Endeavour Series 6</Card.Title>
                <Card.Text>
                  Action / Adventure
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{height: "500px", width: "300px", borderRadius: "10px"}}>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA3My45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00348725-qjtqfsmnqa-portrait.jpg" style={{height: "320px", width: "80%" , margin: "40px", borderRadius: "10px", zIndex: "1"}}/>
              <Card.Body>
                <Card.Title>Ponniyin Selvan Part 2</Card.Title>
                <Card.Text>
                  Action/ Adventure / Drama / Historical{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="bg-dark text-white" style={{height: "500px", width: "300px", borderRadius: "10px"}}>
              <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00359079-kdcrhxejxm-portrait.jpg" style={{height: "320px", width: "80%" , margin: "40px", borderRadius: "10px", zIndex: "1"}}/>
              <Card.Body>
                <Card.Title>Victor Lessard Season 1</Card.Title>
                <Card.Text>
                   Action / Adventure
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Premieres;
