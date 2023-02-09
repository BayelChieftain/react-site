import React, { Component } from 'react';
import { Container, Form,  Button } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: '501px'}} bg="dark">
        <h1 className='text-center mt-3'>Contact us</h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email adress</Form.Label>
            <Form.Control type="email" placeholder='Enter email' />
            <Form.Text>
              WE`ll never share your email with anyone else
            </Form.Text>
          </Form.Group>
           
           
           <Form.Group controlId='formBasicPassword'>
            <Form.Label className='mt-4'>Example textarea</Form.Label>
            <Form.Control as='textarea' rows="3"/>
           </Form.Group>
        
          <Form.Group>
            <Form.Check type='chekbox' label='Check me out'/>
          </Form.Group>
          <Button variant='primary' type='submit' className='mt-2'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
