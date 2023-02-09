import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

//photo
import codeImg from '../assets/code.jpg';
import secImg from '../assets/sec.jpg';
import macImg from '../assets/mac.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
          className='d-block w-100'
          src={codeImg}
          alt='code'
          height='610'
          />
          <Carousel.Caption>
            <h3>CODE</h3>
            <p>....</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
          src={secImg}
          alt='sec'
          height='610'
          />
          <Carousel.Caption>
            <h3>SEC</h3>
            <p>....</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className='d-block w-100'
          src={macImg}
          alt='mac'
          height='610'
          />
          <Carousel.Caption>
            <h3>MAC</h3>
            <p>....</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

