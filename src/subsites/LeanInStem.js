import React from 'react';
import Navbar from '../Navbar';
import MainWallpaper from '../MainWallpaper';
import CircleBar from '../CircleBar';
import ArticleLeft from '../ArticleLeft';
import {articles} from '../articles.json';
import BottomBar from '../BottomBar';

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
                    <CircleBar 
                        number1 = '12' text1 = 'lat' boxShadow1 = '#5eb9bc' color1 = '#5bb9b9' textColor1 = '#23576c' fontSize1 = '1.3rem'
                        number2 = '107000' text2 = 'absolwentów' boxShadow2 = '#ced628' color2 = '#5bb9b9' textColor2 = '#23576c' fontSize2 = '1.3rem'
                        number3 = '12' text3 = 'uczelni technicznych' boxShadow3 = '#5eb9bc' color3 = '#5bb9b9' textColor3 = '#23576c' fontSize3 = '1.3rem'
                        number4 = '340' text4 = 'uczestniczek biegu w kasku' boxShadow4 = '#ced628' color4 = '#5bb9b9' textColor4 = '#23576c' fontSize4 = '1.3rem'
                    />
                </section>
                <section>
                    <ArticleLeft
                        src = 'stem/STEM-fot-1.png'
                        art = {articles[0].program_mentoringowy}
                        className = 'row article__left--frame'
                    />
                </section>
                <section>
                    <section>
                        <div className = 'container'></div>
                    </section>
                    <div style = {this.state.style}>Content will be available soon</div>
                </section>
                <section>
                    <BottomBar/>
                </section>
            </div>
        )
    }
}

export default LeanInStem;