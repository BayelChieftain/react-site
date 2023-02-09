import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant='pillls' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="san">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="su">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="wo">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='first'>
                    <img height='490' width='888' src='https://images.pexels.com/photos/3139298/pexels-photo-3139298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                    <img height='490' width='888' src='https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </Tab.Pane>
                <Tab.Pane eventKey='san'>
                    <img height='490' width='888' src='https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </Tab.Pane>
                <Tab.Pane eventKey='su'>
                    <img height='490' width='888' src='https://images.pexels.com/photos/14217508/pexels-photo-14217508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </Tab.Pane>
                <Tab.Pane eventKey='wo'>
                    <img height='490' width='888' src='https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
