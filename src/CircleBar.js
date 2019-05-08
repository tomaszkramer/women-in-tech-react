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

    isInViewPort = () => {
        let circleBar = document.querySelector('#circleBar');
        let bounding = circleBar.getBoundingClientRect()
            
        if(bounding.top <= 330 && circleBar !== null) {
            this.setState({
                number1: this.props.number1,
                number2: this.props.number2,
                number3: this.props.number3,
                number4: this.props.number4
                })
            } 
    }

    componentDidMount(){ 
        window.addEventListener('scroll', this.isInViewPort)
    }
        
    componentWillUnmount(){
        window.removeEventListener('scroll', this.isInViewPort)
    }

    render() {

        return (
            <div id = "circleBar" className = "container mt-4">
                <div className = 'row'>
                    <div className = 'col-12 col-lg-6 col-xl-3 d-flex justify-content-center'>
                        <Circle
                            number = {this.state.number1}
                            text = {this.props.text1}
                            boxShadow = {this.props.boxShadow1}
                            color = {this.props.color1}
                            fontSize = {this.props.fontSize1}
                            textColor = {this.props.textColor1}
                        />
                    </div>
                    <div className = 'col-12 col-lg-6 col-xl-3 d-flex justify-content-center'>
                        <Circle
                            number = {this.state.number2}
                            text = {this.props.text2}
                            boxShadow = {this.props.boxShadow2}
                            color = {this.props.color2}
                            fontSize = {this.props.fontSize2}
                            textColor = {this.props.textColor2}
                        />
                    </div>
                    <div className = 'col-12 col-lg-6 col-xl-3 d-flex justify-content-center'>
                        <Circle
                            number = {this.state.number3}
                            text = {this.props.text3}
                            boxShadow = {this.props.boxShadow3}
                            color = {this.props.color3}
                            fontSize = {this.props.fontSize3}
                            textColor = {this.props.textColor3}
                        />
                    </div>
                    <div className = 'col-12 col-lg-6 col-xl-3 d-flex justify-content-center'>
                        <Circle
                            number = {this.state.number4}
                            text = {this.props.text4}
                            boxShadow = {this.props.boxShadow4}
                            color = {this.props.color4}
                            fontSize = {this.props.fontSize4}
                            textColor = {this.props.textColor4}
                        />
                    </div>
                </div>        
            </div>
        )
    }
}

export default CircleBar;