import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
class Galaxy extends Component {
    render() {
        return(       
            <div id="Galaxy">
            <div className="about">
               <div className="bg_links social portfolio">
                    <Link to="/contact">
                    <FontAwesomeIcon icon="chevron-circle-right"/>
                    </Link>
               </div>
               <a className="bg_links social dribbble" href="https://www.jungwei.com.tw" target="_blank">
                  <span className="icon">
                    <FontAwesomeIcon icon="people-arrows"/>
                  </span>
               </a>
               <div className="bg_links social linkedin" >
                    <Link to="/about">
                    <span className="icon">
                    <FontAwesomeIcon icon="chevron-circle-left"/>
                    </span>
                    </Link>
               </div>
               <a className="bg_links logo">
                <FontAwesomeIcon icon="info-circle"/>
               </a>
            </div>
            <Link to="/">
                <div className="content">
                <div className="planet">
                    <div className="ring"></div>
                        <div className="cover-ring"></div>
                    <div className="spots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>Portfolio</p>
                </div>
            </Link>

            </div>
        )
    }
}

export default Galaxy