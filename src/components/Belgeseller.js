import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function Belgeseller() {
  return (
    <div className="Filmler">
        <h2>Belgeseller</h2>
      <Container>
        <Row>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Cosmos: A SpaceTime Odyssey</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/sm/upload/ol/ng/2p/y3/l4pdg33PJg6YeFkm6os9mfMDfLC-0-300-0-450-crop.jpg?k=38e8f0b5f8"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>A documentary series that explores how we discovered the laws of nature and found our coordinates in space and time.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=Fm4UV5_HsPA" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>

          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Kedi</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/3/2/6/5/6/5/326565-kedi-0-300-0-450-crop.jpg?k=a3cbc11382"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>A CAT MEOWING AT YOUR FEET, LOOKING UP AT YOU, IS LIFE SMILING AT YOU… <br /> A profile of Istanbul and its unique people, seen through the eyes of the most mysterious and beloved animal humans have ever known, the Cat.
                and powerful computers who now rule the earth.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=lKq7UqplcL8" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Blue</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/3/8/3/8/0/6/383806-blue-0-300-0-450-crop.jpg?k=5ea56fe584"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>A thorough look at the 90’s Turkish rock scene, one legendary stage band and its two members: Kerim Capli and Yavuz Cetin… An inquiry of their existential battles with the society, the industry and their own minds.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=tP9z5idLZ2U" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Belgeseller;