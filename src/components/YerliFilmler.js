import { Card, Button, CardTitle , CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function YerliFilmler() {
  return (
    <div className="Filmler">
        <h2>Yerli Filmler</h2>
      <Container>
        <Row>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>7. Koğuştaki Mucize</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/6/4/0/8/7/564087-miracle-in-cell-no-7-0-300-0-450-crop.jpg?k=b618e02e9a"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>Filmde 7 yaşındaki kızı Ova ile aynı zeka yaşına sahip olan baba Memo'nun adalet arayışını anlatılıyor. 
                Üst düzey bir komutanının kızının ölümü ile suçlanan Memo, kimseyi suçsuz olduğuna inandıramaz. İdam cezası alan Memo ve yakınları, 
                Memo'nun kurtulması için bir mucize beklemeye başlarlar. 
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=bDAkHkR6fwA&feature=emb_title" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>

          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Nasipse Adayız</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/5/8/9/2/4/5/589245-you-know-him-0-300-0-450-crop.jpg?k=9228c555e6"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>Doktor Kemal Güner, İstanbul’da bir belediyenin başkan aday adayı olmak istemektedir. Kemal, başkan adayı olmak için çalışmalarına devam ederken bir yandan Bir Numara’nın adaylığının açıklanacağı geceye heyecanla hazırlanmaktadır. Kemal’in etrafındaki herkes, eski eşi dahil bu çılgınca koşuşturmaya şahit olur. Aday olabilmek için her yolu deneyen Kemal, Bir Numara’nın gözüne girip adaylığının kesinleşmesini beklediği önemli gecede hiç beklemediği olaylarla karşılaşacaktır.
              </CardText>
              <Button><a className='link' href="https://www.youtube.com/watch?v=-JD6zdOWxO8" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
          <Col xs="12" md="6" xl="4">
            <Card body inverse className="card-item" >
              <CardTitle>Cem Yılmaz: Diamond Elite Platinum Plus</CardTitle>
              <img
                src="https://a.ltrbxd.com/resized/film-poster/8/2/2/5/1/3/822513-cmylmz-diamond-elite-platinum-plus-0-300-0-450-crop.jpg?k=2222b99620"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/no-image-icon.png";

                }} alt=''
              />
              <CardText>In an irreverent but heartfelt stand-up show, Turkish comedian Cem Yılmaz shares stories about childhood, social media and Turks on holiday abroad.
              </CardText>
              <Button><a className='link' href="https://youtu.be/L0fw0WzFaBM" target="_blank" rel='noreferrer'>İzle</a></Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default YerliFilmler;
