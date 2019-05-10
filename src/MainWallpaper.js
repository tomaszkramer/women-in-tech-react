import React from 'react';
// import Background from './img/glowa.jpg';


class MainWallpaper extends React.Component {
    state = {
        imgPathBg: './img/',
        imgPath: './img/subsites/',
        style : {
            zIndex: '-10'
        },
        logo : {
            classNameShow : 'navbar-brand show',
            classNameHide: 'navbar-brand hide',
            classHidden: 'navbar-brand hidden',
        }
    }
    
   

    componentDidMount() {
        let logo = document.querySelector('#logo')
        logo.style.background = this.props.logoBackground;
    }
    render () {
        
        return (
            <div id = "wallpaper" className = "container-fluid p-0">
                <img src = {require(`${this.state.imgPathBg}${this.props.srcBg}`)} className = 'w-100' style = {this.state.style} alt =""/>
                <div className = {this.props.className}>
                    <img className = "img-fluid" src = {require(`${this.state.imgPath}${this.props.src1}`)} alt =""/>
                    <img className = "img-fluid" src = {require(`${this.state.imgPath}${this.props.src2}`)} alt =""/>
                </div>
            </div>
        )
    }
}

export default MainWallpaper;