import React from 'react';
import Navbar from '../Navbar';
import MainWallpaper from '../MainWallpaper';
import CircleBar from '../CircleBar';
import Article48 from '../Article48';
import ArticleLeft from '../ArticleLeft';
import ArticleFrameRight from '../ArticleFrameRight';
import ArticleFrameLeft from '../ArticleFrameLeft';
import SectionName from '../SectionName';
import {articles} from '../articles.json';
import BottomBar from '../BottomBar';
import ChartJs from '../ChartJs';
import StemPartners from '../StemPartners';
import Partners from '../Partners';

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
                <section className = 'container'>
                    <Article48
                        art = {articles[0].itforshe}
                        src = 'stem/logo-stem.png'
                        className = 'row'
                    />
                </section>
                <section>
                    <ChartJs
                        text = 'akcja Girls Go StartUP Academy w liczbach'
                        borderColor = '#5cb9be'
                        backgroundColor = '#5cb9be'
                        beginAt = '10'
                        datalabelColor = '#5cb9be'
                    />
                </section>
                <section>
                    <ArticleLeft
                        src = 'stem/STEM-fot-1.png'
                        art = {articles[0].program_mentoringowy}
                        className = 'row article__left--frame'
                    />
                </section>
                <section className = 'container'>
                    <ArticleFrameRight
                        art = {articles[0].program_mentoringowy}
                        srcImg = 'stem/STEM-fot-2.png'
                        srcFrame = 'stem/STEM-trapez-1.png'
                        classArticleContainer = 'mx-2'
                        classColRight = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                        classColLeft = 'col-12 col-lg-7 px-0 position-relative'
                        classImgFrame = 'articleFrameRight--frame'
                    />
                </section>
                <section className = 'container'>
                    <ArticleFrameLeft
                        art = {articles[0].program_mentoringowy}
                        srcImg = 'stem/STEM-fot-3.png'
                        srcFrame = 'stem/STEM-trapez-2.png'
                        classArticleContainer = 'text-right mx-2'
                        classColRight = 'col-12 col-lg-7 px-0 position-relative'
                        classColLeft = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                        classImgFrame = 'articleFrameLeft--frame'
                    />
                </section>
                <section>
                    <SectionName name = 'OUR PARTNERS'/>
                    <Partners data = {StemPartners}/>
                </section>
                <section>
                    <BottomBar/>
                </section>
            </div>
        )
    }
}

export default LeanInStem;