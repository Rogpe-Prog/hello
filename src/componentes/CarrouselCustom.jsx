import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class ListGroups extends Component {
    render(){
        return(
            <Carousel>
            <Carousel.Item className='item'>
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/300?text=First slide&bg=373940"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/300?text=Second slide&bg=282c34"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/300?text=Third slide&bg=282c34"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        )
    }
}