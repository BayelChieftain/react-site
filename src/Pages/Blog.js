import React, { Component } from 'react'
import { Col, Container, Row,  Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='9'>
            <Card className='m-5'>
              <img
              width={150}
              height={150}
              className='mr-3'
              src="https://my-js.org/img/logo.webp"
              
              />
              <Card.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum accusamus numquam quidem, excepturi ex aspernatur esse ratione repellat qui tempora</p>
              </Card.Body>
            </Card>
            <Card className='m-5'>
              <img
              width={150}
              height={150}
              className='mr-3'
              src="https://my-js.org/img/logo.webp"
              
              />
              <Card.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum accusamus numquam quidem, excepturi ex aspernatur esse ratione repellat qui tempora</p>
              </Card.Body>
            </Card>
            <Card className='m-5'>
              <img
              width={150}
              height={150}
              className='mr-3'
              src="https://my-js.org/img/logo.webp"
              
              />
              <Card.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum accusamus numquam quidem, excepturi ex aspernatur esse ratione repellat qui tempora</p>
              </Card.Body>
            </Card>
            <Card className='m-5'>
              <img
              width={150}
              height={150}
              className='mr-3'
              src="https://my-js.org/img/logo.webp"
              
              />
              <Card.Body>
                <h5>Blog post</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum accusamus numquam quidem, excepturi ex aspernatur esse ratione repellat qui tempora</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md='3'>
            <h5 className='text-ctnter mt-5' >Categoria</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  Html/css
                </ListGroup.Item>
                <ListGroup.Item>
                  Javascript
                </ListGroup.Item>
                <ListGroup.Item>
                  C++
                </ListGroup.Item>
                <ListGroup.Item>
                  C#
                </ListGroup.Item>
                <ListGroup.Item>
                  Python
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
