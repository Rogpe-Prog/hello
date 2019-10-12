import React, { Component } from 'react'
import{ Jumbotron, Container } from 'react-bootstrap'
import './JumbotronCustom.css'


export default class JumbotronCustom extends Component {
    render(){
        return(
                <Jumbotron fluid className='jumbotron'>
                <Container className='contain'>
                    <h1>Welcome Budy!!!</h1>
                    <p>
                        This is a unique page about photos to the eyes calm down, then
                        enjoy it.
                    </p>
                </Container>
                </Jumbotron>
        )
    }
}