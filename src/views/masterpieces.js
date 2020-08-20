import React from 'react'
import Galaxy from '../../src/components/bg/galaxy'
import List from '../components/unit/list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function masterpieces() {
    return (
        <div id="galaxy">
            <div className="container-fluid">
                <div className="row">
                <Galaxy />
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <List/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default masterpieces