import React from 'react';
import Circle from './Circle';

class CircleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: '0',
            number2: '0',
            number3: '0',
            number4: '0'
        }
    }

    componentDidMount(){ 
        window.addEventListener('scroll', () => {
            let circleBar = document.querySelector('#circleBar');
            let bounding = circleBar.getBoundingClientRect()
            
            if(bounding.top <= 330) {
                this.setState({
                    number1: this.props.number1,
                    number2: this.props.number2,
                    number3: this.props.number3,
                    number4: this.props.number4
                })
            } 
        })
    }
        
    componentWillUnmount(){
        window.removeEventListener('scroll')
    }

    render() {

        return (
            <div id = "circleBar" className = "container mt-4">
                <div className = 'row'>
                    <div className = 'col-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                        <Circle
                            number = {this.state.number1}
                            text = {this.props.text1}
                            boxShadow = {this.props.boxShadow1}
                            color = {this.props.color1}
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                        <Circle
                            number = {this.state.number2}
                            text = {this.props.text2}
                            boxShadow = {this.props.boxShadow2}
                            color = {this.props.color2}
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                        <Circle
                            number = {this.state.number3}
                            text = {this.props.text3}
                            boxShadow = {this.props.boxShadow3}
                            color = {this.props.color3}
                        />
                    </div>
                    <div className = 'col-12 col-md-6 col-lg-3 d-flex justify-content-center'>
                        <Circle
                            number = {this.state.number4}
                            text = {this.props.text4}
                            boxShadow = {this.props.boxShadow4}
                            color = {this.props.color4}
                        />
                    </div>
                </div>        
            </div>
        )
    }
}

export default CircleBar;