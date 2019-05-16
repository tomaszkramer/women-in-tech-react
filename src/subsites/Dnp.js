import React from 'react';
import MainWallpaper from '../MainWallpaper';
import CircleBar from '../CircleBar';
import SectionName from '../SectionName';
import Chartjs from '../ChartJs';
import Article48 from '../Article48';
import {articles} from '../articles.json';
import ChartjsData from '../ChartjsData';
import ArticleBackgroundImage from '../ArticleBackgroundImage';
import ArticleFrameRight from '../ArticleFrameRight';
import ArticleFrameLeft from '../ArticleFrameLeft';
import Partners from '../Partners';
import DnpPartners from '../DnpPartners';
import background from '../img/subsites/dnp/DNP---kable.jpg'

class Dnp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style : {
                fontSize: '4rem',
            fontFamily : 'TravelingTypewriter',
            textAlign : 'center'
            },
            background : background,
        }
    }

    componentDidMount () {
        this.setState({
            background : background,
        })
    }

    render() {
        return (
            <div>
                <MainWallpaper 
                    srcBg = 'subsites/dnp/dnp_head.png'
                    src1 = 'logo_glowne.png'
                    src2 = 'dnp/dziewczyny_na_politechniki.png'
                    className = 'wallpaper__logos--reverse'
                    logoBackground = '#ec6f5d'
                />
                <section>
                    <CircleBar
                        number1 ='12' text1 = 'lat' boxShadow1 = '#ec9f8f' color1 ='#ec6f5d' fontSize1 = '1.4rem' textColor1 = '#23576d'
                        number2 = '107000'  text2 = 'absolwentów' boxShadow2 = '#ed6e5d' color2 = '#ec6f5d' fontSize2 = '1.4rem' textColor2 = '#23576d'
                        number3 ='12' text3 = 'uczelni technicznych' boxShadow3 = '#ec9f8f' color3 ='#ec6f5d' fontSize3 = '1.4rem' textColor3 = '#23576d'
                        number4 = '340' text4 = 'uczesniczek biegu w kasku' boxShadow4 = '#ed6e5d' color4 = '#ec6f5d' fontSize4 = '1.3rem' textColor4 = '#23576d'
                    />
                </section>
                <section className = 'container'>
                    <Article48
                        art = {articles[0].itforshe}
                        src = 'dnp/loga_DNP.png'
                        className = 'row my-4'
                    />
                </section>
                <section>
                    <Chartjs 
                         text = 'nasze akcje w latach'
                         borderColor = '#df3245'
                         backgroundColor = '#df3245'
                         beginAt = '12'
                         endAt = '22'
                         datalabelColor = '#df3245'
                         labels = {ChartjsData[0].dnp.labels}
                         data = {ChartjsData[0].dnp.data}
                    />
                </section>
                <section className ='my-4'>
                    <ArticleBackgroundImage 
                        src = 'dnp/DNP---kable.jpg'
                        art = {articles[0].article4}
                        backgroundImage = {this.state.background}
                        color = 'white'
                    />
                </section>
                <section className = 'container my-4'>
                    <ArticleFrameRight
                        art = {articles[0].article4}
                        srcImg = 'dnp/DNP---fot1.png'
                        srcFrame = 'dnp/DNP---trapez1.png'
                        classArticleContainer  = 'mx-2'
                        classColRight = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                        classColLeft = 'col-12 col-lg-7 px-0 position-relative'
                        classImgFrame = 'articleFrameRight--frame'
                    />
                    <ArticleFrameLeft 
                        art = {articles[0].article4}
                        srcImg = 'dnp/DNP---fot2.png'
                        srcFrame = 'dnp/DNP---trapez2.png'
                        classArticleContainer = 'text-right mx-2'
                        classColRight = 'col-12 col-lg-7 px-0 position-relative'
                        classColLeft = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                        classImgFrame = 'articleFrameLeft--frame'
                    />
                    <ArticleFrameRight
                        art = {articles[0].article4}
                        srcImg = 'dnp/DNP---fot3.png'
                        srcFrame = 'dnp/DNP---trapez3.png'
                        classArticleContainer  = 'mx-2'
                        classColRight = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                        classColLeft = 'col-12 col-lg-7 px-0 position-relative'
                        classImgFrame = 'articleFrameRight--frame'
                    />
                </section>
                <section>
                    <SectionName name = 'OUR PARTNERS'/>
                    <Partners data = {DnpPartners} />
                </section>
                
            </div>
        )
    }
}

export default Dnp;