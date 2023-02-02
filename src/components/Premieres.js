import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Premieres() {
  return (
    <div style={{background: "rgb(43, 49, 72)", padding: "5%" }}>
      <h2 style={{ color: "white" }}>Premieres</h2>
      <Carousel indicators={false} variant= "dark">
        <Carousel.Item>
          <CardGroup style={{display: "flex", gap: "40px", justifyContent:"space-around"}}>
            <Card className="bg-dark text-white" style={{height: "500px", width: "300px"}}>
              <Card.Img variant="top" src="./logo192.png" style={{height: "300px", width: "300px"}}/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{height: "500px", width: "300px"}}>
              <Card.Img variant="top" src="./logo192.png" style={{height: "300px", width: "300px"}}/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{height: "500px", width: "300px"}}>
              <Card.Img variant="top" src="./logo192.png" style={{height: "300px", width: "300px"}}/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup style={{display: "flex", gap: "40px", justifyContent:"space-around"}}>
            <Card style={{height: "500px", width: "300px"}}>
              <Card.Img variant="top" src="./logo192.png" style={{height: "300px", width: "300px"}}/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{height: "500px", width: "300px"}}>
              <Card.Img variant="top" src="./logo192.png" style={{height: "300px", width: "300px"}}/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{height: "500px", width: "300px"}}>
              <Card.Img variant="top" src="./logo192.png" style={{height: "300px", width: "300px"}}/>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
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
