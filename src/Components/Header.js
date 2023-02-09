import React, { Component } from 'react'
import { Button, Container, FormControl, Nav, Navbar, Form } from 'react-bootstrap'
import logo from './logo192.png';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';



export default class Header extends Component {
  render() {
    return (
        <div>
      <Navbar  collapseOnSelect expand="md" bg="dark" variant='dark'>
        <Container>
            <Navbar.Brand href='/'>
               <img 
                    src={logo}
                    height="30"
                    width="30"
                    className='d-inline-block align-top'
                    alt="Logo"
                    />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/contacts'>Contacts</Nav.Link>
                    <Nav.Link href='/blog'>Blog</Nav.Link>
                </Nav>
                 
                <Form inline style={{margin:'0 0 0 600px', display:'flex'}}>
                    <FormControl
                        type="text"
                        placeholder='Search'
                        style={{display:'inline-flex'}}
                    />
                    <Button variant='outline-info' style={{ margin:'0 0 0 10px'}}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
      <Routes>
            <Route exact path='/' element={<Home/>} component={Home}/>
            <Route exact path='/about' element={<About/>} component={About}/>
            <Route exact path='/contacts' element={<Contacts/>}component={Contacts}/>
            <Route exact path='/blog' element={<Blog/>}component={Blog}/>
       </Routes>
      </Router>
      </div>
    )
  }
}
