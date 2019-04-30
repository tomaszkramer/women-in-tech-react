import React from 'react';

class Slide extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            imgPath: './img/slider/',
        }
    }

    render () {
        return (
            <div>
                <div>
                    <a href="./dnp.html">
                        <div className="box">
                            <div className="card">
                                <div className="front">
                                    <img src= {require(`${this.state.imgPath}${this.props.slideFront}`)} alt=""></img>
                                </div>
                                <div className="rear">
                                    <img src= {require(`${this.state.imgPath}${this.props.slideBack}`)} alt=""></img>
                                        <p>
                                            <strong>Kliknij</strong><br></br>
                                            aby poznać<br></br>
                                            szczegóły
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
            </div>
        )
    } 
}

export default Slide;