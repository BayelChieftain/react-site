import React, { Component } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
// import slayder
import CarouselBox from '../Components/CarouselBox'
export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox/>
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
          <Row  md={2} className="m-2"> 
            <Card style={{width:"350px", height:"350px"}} border="success" >
              <Card.Img 
                className='rounded'
                variant='top'
                src='https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  
                  <Button className='mt-2' variant='primary'>About team</Button>
                </Card.Body>
            </Card>
            <Card style={{width:"350px", height:"350px", margin:'0px 0px 0px 24px'}} bg="dark" border="success">            
                <Card.Body>
                  <Card.Title><p className='text-white'>Developers</p></Card.Title>
                  <Button className='mt-2' variant='primary'>About team</Button>
                </Card.Body>
                <Card.Img
                className='rounded' 
                variant='botton'
                src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </Card>
            <Card style={{width:"350px", height:"350px", margin:'0px 0px 0px 24px'}} border="success">
              <Card.Img 
              className='rounded'
                variant='top'
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  
                  <Button className='mt-2' variant='primary'>About team</Button>
                </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    )
  }
}
