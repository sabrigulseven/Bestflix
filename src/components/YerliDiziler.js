import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function YerliDiziler() {
  return (
    <div className="Filmler">
      <h2>Yerli Diziler</h2>
      <Container>
        <Row>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Bir Başkadır</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/6/8/4/9/7/5/684975-ethos-0-300-0-450-crop.jpg?k=d8c01bdba6"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>A group of unique characters from dramatically different socio-cultural backgrounds meeting in startling circumstances in the vibrant and colorful city of Istanbul, some by chance and some by force of will.
              </CardText>
              <Button><a className='link' href="https://www.netflix.com/tr/title/81106900" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>

          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Alef</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/6/2/7/8/5/1/627851-aleph-0-300-0-450-crop.jpg?k=2e6a6966d1"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>SOME STONES ARE BETTER LEFT UNTURNED. <br /> When close-to-retirement homicide detective Settar Öztürk is assigned a final case with his case partner Kemal McAllister, they discover a series of ruthless and operose murders. They soon discover they are dealing with a serial killer whose motives are connected with Islamic heresy and sufism. As the case disentangles, the detectives find out solving the case is not their only role in this picture.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=83le7_jzsSM" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default YerliDiziler;