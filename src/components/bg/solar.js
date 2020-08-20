import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useHistory } from 'react-router-dom'

class Solar extends Component {
    constructor() {
        super()
        this.state =  {
            items: [
                'sun',
                'mercury',
                'venus',
                'earth',
                'mars',
                'jupiter',
                'saturn',
                'uranus',
                'neptune',
                'pluto',
                'asteroids-belt'
            ]
        }
    }
    
    render() {
        return (
            <div className="solarDiv">
                <div className='description'>
                    <h1>Jung-Wei, Lin
                    <Link to="/about">
                        <FontAwesomeIcon icon="chevron-circle-right"/>
                    </Link>
                    </h1>
                    <hr></hr>
                    <p>
                       Senior Js Explorer
                    </p>
                </div>
                <div className='solar-syst'>
                    {
                        this.state.items.map((name, i) => {
                            return <div key={i} className={name}></div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Solar