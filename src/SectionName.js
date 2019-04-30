import React from 'react';

class SectionName extends React.Component {
    state = {
        style: {
            fontSize: '2rem',
            color: 'grey'
        }
    }
    render(){
        return(
            <div className = 'section--name container my-4' style = {this.state.style}>
            {this.props.name}
            </div>
        )
    }
}

export default SectionName;