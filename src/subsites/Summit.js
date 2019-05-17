import React from 'react'
import MainWallpapaer from '../MainWallpaper';
import CircleBar from '../CircleBar';
import Article48 from '../Article48';
import SummitPoster from '../SummitPoster';
import {articles} from '../articles.json';

class Summit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <div>
                    <MainWallpapaer 
                    srcBg = 'subsites/summit/summid_head.png'
                    src1 = 'logo_glowne.png'
                    src2 = 'summit/summit.png'
                    className = 'wallpaper__logos--reverse'
                    logoBackground = '#074e78'   
                    />
                </div>
                <section>
                    <CircleBar
                            number1 = '12' text1 = 'lat' boxShadow1 = '#00a5d5' color1 = '#00a6da' textColor1 = '#0f4c5f' fontSize1 = '1.3rem'
                            number2 = '107000' text2 = 'absolwentów' boxShadow2 = '#f78525' color2 = '#00a6da' textColor2 = '#0f4c5f' fontSize2 = '1.3rem'
                            number3 = '12' text3 = 'uczelni technicznych' boxShadow3 = '#00a5d5' color3 = '#00a6da' textColor3 = '#0f4c5f' fontSize3 = '1.3rem'
                            number4 = '340' text4 = 'uczestniczek biegu w kasku' boxShadow4 = '#f78525' color4 = '#00a6da' textColor4 = '#0f4c5f' fontSize4 = '1.3rem'
                        />
                </section>
                <section className = 'container'>
                    <Article48
                        art = {articles[0].itforshe}
                        src = 'summit/logo-summit.png'
                        className = 'row'
                    />
                </section>
                <section>
                    <SummitPoster/>
                </section>
            </div>
        )
    }
}

export default Summit;