import { Card, Button, CardTitle, CardText } from 'reactstrap';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Home() {

  return (
    <div className="Filmler">
      <Container>
        <figure className='position-relative'>
          <img width="80%" src='./blade_runner_2049-4-1.jpg' />
          <figcaption className='figcaption'>Blade Runner 2049</figcaption>
          <figcaption className='figcaptionlink'><a href='https://www.youtube.com/watch?v=dZOaI_Fn5o4' target="_blank" rel='noreferrer' style={{ color: "white" }}>Hemen İzle</a></figcaption>
        </figure>
        <h2>Film, dizi ve çok daha fazlası.</h2>
        <Row>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>The Matrix</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/1/5/1/8/51518-the-matrix-0-300-0-450-crop.jpg?k=7e06708748"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./no-image-icon.png";
                }} alt=''
              />
              <CardText>WELCOME TO THE REAL WORLD. <br /> Set in the 22nd century, The Matrix tells the story
                of a computer hacker who joins a group of underground insurgents fighting the vast
                and powerful computers who now rule the earth.
              </CardText>
              <Button><a className='link' href="https://youtu.be/L0fw0WzFaBM" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>

          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Shin Godzilla</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/sm/upload/8g/5p/p4/6b/8YWirGQidtZeSEmhqvQM5FrI6N1-0-300-0-450-crop.jpg?k=2a2bee44e7"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./no-image-icon.png";

                }} alt=''
              />
              <CardText>REALITY (JAPAN) VS. FICTION (GODZILLA). <br /> When a massive, gilled monster emerges from the deep and tears through the city, the government scrambles to save its citizens. A rag-tag team of volunteers cuts through a web of red tape to uncover the monster’s weakness and its mysterious ties to a foreign superpower. 
              But time is not on their side - the greatest catastrophe to ever befall the world is about to evolve right before their very eyes.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=3qX1ZU3jcfU" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Cem Yılmaz: Diamond Elite Platinum Plus</CardTitle>
              <img
                src="BİLEREK BIRAKILMIŞ YANLIŞ LİNK"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./no-image-icon.png";

                }} alt=''
              />
              <CardText>In an irreverent but heartfelt stand-up show, Turkish comedian Cem Yılmaz shares stories about childhood, social media and Turks on holiday abroad.
              </CardText>
              <Button><a className='link' href="https://youtu.be/L0fw0WzFaBM" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>WandaVision</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/6/7/1/8/1/3/671813-wandavision-0-300-0-450-crop.jpg?k=12e795b1fe"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./no-image-icon.png";

                }} alt=''
              />
              <CardText>EXPERIENCE A NEW VISION OF REALITY. <br /> Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=Ch0wMWnXjeA" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Kedi</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/3/2/6/5/6/5/326565-kedi-0-300-0-450-crop.jpg?k=a3cbc11382"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./no-image-icon.png";

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
              <CardTitle>Last Night in Sohox</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/0/5/0/0/0/505000-last-night-in-soho-0-300-0-450-crop.jpg?k=d165b2fbee"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./no-image-icon.png";

                }} alt=''
              />
              <CardText>WHEN THE PAST LETS YOU IN, THE TRUTH WILL COME OUT. <br /> A young girl, passionate about fashion design, is mysteriously able to enter the 1960s where she encounters her idol, a dazzling wannabe singer. 
              But 1960s London is not what it seems, and time seems to be falling apart with shady consequences.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=XgNrL4Kf7yU&feature=emb_logo" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Primal</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/6/5/6/0/2/565602-primal-0-300-0-450-crop.jpg?k=87f73f9f39"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./no-image-icon.png";

                }} alt=''
              />
              <CardText>A caveman forms a bond with a dinosaur as they struggle to survive in a hostile world.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=0KFyVu514DY&feature=emb_logo" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>The Last Duel</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/4/4/3/8/0/544380-the-last-duel-0-300-0-450-crop.jpg?k=a5d0f47f30"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./no-image-icon.png";

                }} alt=''
              />
              <CardText>THE TRUE STORY OF A WOMAN WHO DEFIED A NATION AND MADE HISTORY. <br /> King Charles VI declares that Knight Jean de 
              Carrouges settle his dispute with his squire by challenging him to a duel.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=mgygUwPJvYk" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
