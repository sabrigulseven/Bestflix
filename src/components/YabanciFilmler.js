import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function YabanciFilmler() {
  return (
    <div className="Filmler">
      <h2>Yabancı Filmler</h2>
      <Container>
        <Row>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle >Blade Runner 2049</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/2/6/5/4/3/9/265439-blade-runner-2049-0-300-0-450-crop.jpg?k=cb998b7a78"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>THE KEY TO THE FUTURE IS FINALLY UNEARTHED. <br /> Thirty years after the events of the first film, a new blade runner, 
              LAPD Officer K, unearths a long-buried secret that has the potential to plunge what’s left of society into chaos.
               K’s discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=dZOaI_Fn5o4&feature=emb_logo" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>

          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Last Night in Sohox</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/0/5/0/0/0/505000-last-night-in-soho-0-300-0-450-crop.jpg?k=d165b2fbee"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

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
              <CardTitle>The Matrix</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/1/5/1/8/51518-the-matrix-0-300-0-450-crop.jpg?k=7e06708748"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

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
              <CardTitle>The Last Duel</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/4/4/3/8/0/544380-the-last-duel-0-300-0-450-crop.jpg?k=a5d0f47f30"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>THE TRUE STORY OF A WOMAN WHO DEFIED A NATION AND MADE HISTORY. <br /> King Charles VI declares that Knight Jean de 
              Carrouges settle his dispute with his squire by challenging him to a duel.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=mgygUwPJvYk" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Ford v Ferrari</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/2/9/1/4/1/9/291419-ford-v-ferrari-0-300-0-450-crop.jpg?k=376315f2ed"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>THEY TOOK THE AMERICAN DREAM FOR A RIDE<br /> American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary
               race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=I3h9Z89U9ZA" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Shin Godzilla</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/sm/upload/8g/5p/p4/6b/8YWirGQidtZeSEmhqvQM5FrI6N1-0-300-0-450-crop.jpg?k=2a2bee44e7"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>REALITY (JAPAN) VS. FICTION (GODZILLA). <br /> When a massive, gilled monster emerges from the deep and tears through the city, the government scrambles to save its citizens. A rag-tag team of volunteers cuts through a web of red tape to uncover the monster’s weakness and its mysterious ties to a foreign superpower. 
              But time is not on their side - the greatest catastrophe to ever befall the world is about to evolve right before their very eyes.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=3qX1ZU3jcfU" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default YabanciFilmler;
