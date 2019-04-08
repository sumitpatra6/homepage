import React, { Component } from 'react';
import logo from './logo.svg';
import index from './index.png'
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#vision">
            <img src={index} alt="logo" style={{
              'height' : '40px',
              'width' : '40px'
            }}/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>            
          </Nav>
          
        </Navbar>


        <HomePage />
      </div>
    );
  }
}

export default App;
