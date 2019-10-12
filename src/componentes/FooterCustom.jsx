import React, { Component } from 'react'
import './FooterCustom.css'

export default class FooterCustom extends Component {
    render(){
        return(
            <div className='footer'>
            <footer fluid="true" className="footer text-center">
                <div className="container">
                    <p className="text-muted credit">Copyright 2019 by Rogpe. All rights reserved.</p>
                </div>
            </footer>
            </div>
        )
    }
}