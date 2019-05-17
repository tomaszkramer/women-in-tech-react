import React from 'react'
import MainWallpapaer from '../MainWallpaper';
import CircleBar from '../CircleBar';
import Article48 from '../Article48';
import SummitPoster from '../SummitPoster';
import ArticleFrameRight from '../ArticleFrameRight';
import ArticleFrameLeft from '../ArticleFrameLeft';
import ArticleRight from '../ArticleRight';
import SectionName from '../SectionName';
import Partners from '../Partners';
import {articles} from '../articles.json';
import SummitPartners from '../SummitPartners';
import NtPartners from '../NtPartners';

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
                <section>
                    <div className = 'videoWrapper my-4'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/WlpT94VglUA" title ="summit" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </section>
                <section className = 'container'>
                <ArticleFrameRight
                    art = {articles[0].program_mentoringowy}
                    srcImg = 'summit/summit-fot2.png'
                    srcFrame = 'summit/summit-trapez1.png'
                    classArticleContainer = 'mx-2'
                    classColRight = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                    classColLeft = 'col-12 col-lg-7 px-0 position-relative'
                    classImgFrame = 'articleFrameRight--frame'
                    />
                    <ArticleFrameLeft
                        art = {articles[0].program_mentoringowy}
                        srcImg = 'summit/summit-fot3.png'
                        srcFrame = 'summit/summit-trapez2.png'
                        classArticleContainer = 'text-right mx-2'
                        classColRight = 'col-12 col-lg-7 px-0 position-relative'
                        classColLeft = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                        classImgFrame = 'articleFrameLeft--frame'
                    />
                </section>
                <section>
                <ArticleRight
                    src = 'summit/summit-fot4.png'
                    art = {articles[0].article3}
                    className = 'row mx-0 article__right--frame'
                   />
                </section>
                <section>
                    <SectionName name = 'OUR PARTNERS'/>
                    <Partners data = {SummitPartners}
                              logoWidth = '200px'  
                    />
                </section>
            </div>
        )
    }
}

export default Summit;