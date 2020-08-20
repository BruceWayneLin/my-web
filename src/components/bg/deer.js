import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
class Deer extends Component {
    render() {
        return (
            <div id="Deer">
            <div className="bg-purple">
                <div className="about">
                    <a className="bg_links social portfolio" href="https://www.jungwei.com.tw" target="_blank">
                        <Link to="/masterpieces">
                        <FontAwesomeIcon icon="chevron-circle-right"/>
                        </Link>
                    </a>
                    <a className="bg_links social dribbble" href="https://www.jungwei.com.tw" target="_blank">
                    <span className="icon">
                        <FontAwesomeIcon icon="people-arrows"/>
                    </span>
                    </a>
                    <a className="bg_links social linkedin" href="https://www.jungwei.com.tw" target="_blank">
                        <Link to="/">
                        <span className="icon">
                        <FontAwesomeIcon icon="chevron-circle-left"/>
                        </span>
                        </Link>
                    </a>
                    <a className="bg_links logo">
                    <FontAwesomeIcon icon="info-circle"/>
                    </a>
                </div>
                <div className="stars">
                <div className="brand-logo">
                    <div className="description">
                    <ul>
                        <li>Degree: </li>
                        <li className="pl-5">University of Oregon in States</li> 
                        <li>Fd skills: </li> 
                        <li className="pl-5">React.js, Vue3.js, Angular6.js, firebase</li> 
                        <li>Bd skills: </li> 
                        <li className="pl-5">Express.js, Node.js, Mysql, MongoDb</li> 
                        <li>Others: </li> 
                        <li className="pl-5">Docker-compose, Linux, Git, AWS</li>                    
                    </ul>
                    </div>
                </div>
                
                <div className="objects">
                    <img className="object_rocket" src={require('../../assets/deer/rocket.svg')} width="40px" alt="rocket" />
                    <div className="earth-moon d-none d-lg-block">
                        <img className="object_earth" src={require('../../assets/deer/earth.svg')} width="100px" alt="earth" />
                        <img className="object_moon" src={require('../../assets/deer/moon.svg')} width="80px" alt="moon" />
                    </div>
                    <Link to="/masterpieces">
                    <div className="box_astronaut">
                        <div className="object_astronaut">
                        <span>Jung-Wei, Lin</span>
                        <img src={require('../../assets/deer/astronaut.svg')} width="140px" alt="astronaut" />
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Deer