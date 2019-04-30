import React from 'react';
import Navbar from '../Navbar';


class ItForShe extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            style: {
                top: '20rem',
                fontSize: '5rem',
                fontFamily: 'TravelingTypewriter'
            }
        }
    }
    render() {
        return <div>
            <header className = 'App-header'>
            <Navbar/>
            </header>
            <div className = 'position-relative text-center' style = {this.state.style}>Content will be available soon :-)</div>
        </div>
    }
}

export default ItForShe;