import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function YabanciDiziler() {
  return (
    <div className="Filmler">
        <h2>Yabancı Diziler</h2>
      <Container>
        <Row>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>WandaVision</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/6/7/1/8/1/3/671813-wandavision-0-300-0-450-crop.jpg?k=12e795b1fe"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>EXPERIENCE A NEW VISION OF REALITY. <br /> Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=Ch0wMWnXjeA" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>

          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Primal</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/6/5/6/0/2/565602-primal-0-300-0-450-crop.jpg?k=87f73f9f39"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>A caveman forms a bond with a dinosaur as they struggle to survive in a hostile world.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=0KFyVu514DY&feature=emb_logo" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>The Queen’s Gambit</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/6/6/8/0/7/7/668077-the-queen-s-gambit-0-300-0-450-crop.jpg?k=a32f9ed061"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>In a Kentucky orphanage in the 1950s, a young girl discovers an astonishing talent for chess while struggling with addiction.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=oZn3qSgmLqI&feature=emb_logo" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default YabanciDiziler;