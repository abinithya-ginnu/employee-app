import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

const profileImgDict = {
  0: 'profile-image.jpeg',
  1: 'profile-image1.jpeg',
  2: 'profile-image2.jpeg',
  3: 'profile-image3.jpeg',
  4: 'profile-image4.jpeg',
  5: 'profile-image5.jpeg',
  6: 'profile-image6.jpeg',
  7: 'profile-image7.jpeg',
  8: 'profile-image8.jpeg',
  9: 'profile-image9.jpeg'
}
const EmpCarousel = (props) => {
  return (
      <Carousel style={{ height: 400 }}>
        {props.data.map((row, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center"> 
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={200} src={profileImgDict[index]} />
                <Card.Body>
                  <Card.Title>{row.name}</Card.Title>
                  <Card.Text>
                    {row.address.street}, {row.address.city}
                  </Card.Text>
                  <Button as='Link' href={row.website} variant="dark">{row.website}</Button>
                </Card.Body>
              </Card>
              </div>
            </Carousel.Item>
        ))} 
      </Carousel>
  )
}

export default EmpCarousel;