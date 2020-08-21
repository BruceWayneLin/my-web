import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends Component {
    toGo() {
       window.open('https://mail.google.com/mail/?view=cm&fs=1&to=anikiwayne@gmail.com', '_blank')
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div id="contact">     
                <div className="space">
                <div className="ship">
                <div className="ship-rotate">
                    <div className="pod"></div>
                    <div className="fuselage"></div>
                </div>
                </div>
                <div className="ship-shadow"></div>
                <h4 className="text-center">Click below to contact</h4>
                <div className="mars" onClick={()=>{this.toGo()}}>
                <div className="tentacle"></div>
                <div className="flag">
                    <div className="small-tentacle"></div>
                </div>
                <div className="planet">
                    <div className="surface"></div>
                    <div className="crater1"></div>
                    <div className="crater2"></div>
                    <div className="crater3"></div>
                </div>
                </div>
                <div className="test"></div>
            </div>
            <div className="about">
                <a className="bg_links social portfolio" href="https://www.jungwei.com.tw" target="_blank">
                    <Link to="/">
                    <FontAwesomeIcon icon="chevron-circle-right"/>
                    </Link>
                </a>
                <a className="bg_links social dribbble" href="https://www.jungwei.com.tw" target="_blank">
                <span className="icon">
                    <FontAwesomeIcon icon="people-arrows"/>
                </span>
                </a>
                <a className="bg_links social linkedin" href="https://www.jungwei.com.tw" target="_blank">
                    <Link to="/masterpieces">
                    <span className="icon">
                    <FontAwesomeIcon icon="chevron-circle-left"/>
                    </span>
                    </Link>
                </a>
                <a className="bg_links logo">
                <FontAwesomeIcon icon="info-circle"/>
                </a>
            </div>
            
            </div>
        )
    }
}

export default Contact