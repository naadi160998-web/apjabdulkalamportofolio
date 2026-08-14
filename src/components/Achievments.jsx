import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
const Achievments = () => {
  const achievements = [
    {
      id: 1,
      title: 'Served as the 11th President of India from 2002 to 2007.',
      description: "He was popularly known as the People's President.",
      image: '/src/assets/1ache.jpg',
      interval: 3000
    },
    {
      id: 2,
      title: 'Contributed to the development of Agni and Prithvi missiles.',
      description: "Played a major role in India's missile development programme.",
      image: '/src/assets/2aapj.jpg',
      interval: 3000
    },
    {
      id: 3,
      title: 'Served as Project Director of SLV-III.',
      description: 'Helped successfully launch the Rohini satellite into orbit.',
      image: '/src/assets/1aapj.jpg',
      interval: 3000
    }
  ];
  return (
    <Container id='achievements' className="h-100vh d-flex flex-column justify-content-center align-items-center text-light">
      <h1 className='text-dark text-center my-5'>ACHIEVEMENTS</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Carousel fade className="acheivementSlider">
          {
            achievements.map((achievement) => (
              <Carousel.Item key={achievement.id} interval={achievement.interval}>
                <img src={achievement.image} className="acheivementSliderImg" alt={achievement.title} />
                <Carousel.Caption>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Container>
    </Container>
  )
}

export default Achievments
