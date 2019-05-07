import React from 'react'
import Navbar from '../Navbar';
import MainWallpaper from '../MainWallpaper';

class LeanInStem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {
                fontSize: '4rem',
            fontFamily: 'TravelingTypewriter',
            textAlign: 'center'
            }
        }
    }

    render() {
        return(
            <div>
                <div>
                  <Navbar/>
                  <MainWallpaper
                    srcBg = 'subsites/stem/stem_head.png'
                    src1 = 'logo_glowne.png'
                    src2 = 'stem/lean_in_stem.png'
                    className = 'wallpaper__logos--reverse'
                    />
                </div>
                <section>
                    <div style = {this.state.style}>Content will be available soon</div>
                </section>
            </div>
        )
    }
}

export default LeanInStem;