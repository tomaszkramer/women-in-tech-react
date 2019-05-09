import React from 'react';
import Navbar from '../Navbar';
import MainWallpaper from '../MainWallpaper';

class Dnp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style : {
                fontSize: '4rem',
            fontFamily : 'TravelingTypewriter',
            paddingTop: '300px'
            }
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <MainWallpaper 
                    srcBg = 'subsites/dnp/dnp_head.png'
                    src1 = 'logo_glowne.png'
                    src2 = 'dnp/dziewczyny_na_politechniki.png'
                    className = 'wallpaper__logos--reverse'
                />
                <div style = {this.state.style}>
                    Content will be available soon
                </div>
            </div>
        )
    }
}

export default Dnp;