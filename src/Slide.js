import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

class Slide extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            imgPath: './img/slider/',
        }
    }

    render () {
        console.log(this.props.link)
        return (
            <div>
                <div>
                    <Link to = {this.props.link}>
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
                    </Link>
                </div>
            </div>
        )
    } 
}

export default Slide;