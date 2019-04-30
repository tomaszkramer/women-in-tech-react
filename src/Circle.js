import React from 'react';
import CountUp from 'react-countup';

class Circle extends React.Component {
    state = {
        style : {
            boxShadow: `0 0 5px 5px ${this.props.boxShadow}`,
            color: this.props.color,
        },
    }
    render() {
        return(
            <div className = 'circle d-flex flex-column justify-content-center text-center m-3' style = {this.state.style}>
                <p className = 'circle--number'>
                <CountUp 
                    end = {parseInt(this.props.number)}
                    separator = ' '
                />
                </p>
                <p className = 'circle--text'>{this.props.text}</p>
                
            </div>
        )
    }
}

export default Circle;