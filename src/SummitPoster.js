import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faDotCircle);

class SummitPoster extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className = 'summitPoster position-relative'>
                <img className = 'img-fluid' src = {require('./img/subsites/summit/summit-fot1.png')} alt = '' />
                <div className = 'position-absolute summitPoster--container' >
                    <div className = 'summitPoster--container2'>
                        <span className = 'summitPoster--span1'>DANCING</span>
                        <span className = 'summitPoster--span2'>WITH </span>
                    </div>
                    <div className = 'summitPoster--container3'>
                        <span className = 'summitPoster--span3'>THE</span>
                        <span className = 'summitPoster--span4'>FUTURE </span>
                    </div>
                    <div><span>13-14 NOVEMBER </span> 
                        <FontAwesomeIcon className = '' icon = 'dot-circle'/>
                        <span className = ''> WARSAW 2019 </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SummitPoster;