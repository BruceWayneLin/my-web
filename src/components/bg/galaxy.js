import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
class Galaxy extends Component {
    render() {
        return(       
            <div id="Galaxy">
            <div className="about">
               <a className="bg_links social portfolio" href="https://www.jungwei.com.tw" target="_blank">
                    <FontAwesomeIcon icon="chevron-circle-right"/>
               </a>
               <a className="bg_links social dribbble" href="https://www.jungwei.com.tw" target="_blank">
                  <span className="icon">
                    <FontAwesomeIcon icon="people-arrows"/>
                  </span>
               </a>
               <a className="bg_links social linkedin" href="https://www.jungwei.com.tw" target="_blank">
                    <Link to="/about">
                    <span className="icon">
                    <FontAwesomeIcon icon="chevron-circle-left"/>
                    </span>
                    </Link>
               </a>
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