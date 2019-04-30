import React from 'react';
import Background from './img/glowa.jpg';


class MainWallpaper extends React.Component {
    state = {
        imgPath: './img/subsites/',
        style : {
            zIndex: '-10'
        }
    }
    
    render () {
        
        return (
            <div className = "container-fluid p-0">
            <img src = {Background} className = 'img-fluid' style = {this.state.style} alt =""/>
            <div className = "wallpaper__logos">
            <img className = "img-fluid" src = {require(`${this.state.imgPath}${this.props.src1}`)} alt =""/>
            <img className = "img-fluid" src = {require(`${this.state.imgPath}${this.props.src2}`)} alt =""/>
            
            </div>
            </div>
        )
    }
}

export default MainWallpaper;