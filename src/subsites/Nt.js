import React from 'react';
import MainWallpaper from '../MainWallpaper';
import CircleBar from '../CircleBar';
import SectionName from '../SectionName';
import Article48 from '../Article48';
import ArticleRight from '../ArticleRight';
import {articles} from '../articles.json';
import ArticleLeft from '../ArticleLeft';
import ArticleFrameRight from '../ArticleFrameRight';
import ArticleFrameLeft from '../ArticleFrameLeft';
import NtPartners from '../NtPartners';
import Partners from '../Partners';

class Nt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <MainWallpaper 
                 srcBg = 'subsites/nt/NT_head.png'
                 src1 = 'logo_glowne.png'
                 src2 = 'nt/nowe_technologie.png'
                 className = 'wallpaper__logos--reverse'
                 logoBackground = '#4c453b'
                />
                <section>
                    <CircleBar 
                        number1 ='12' text1 = 'lat' boxShadow1 = '#9f1b28' color1 ='#9f1b28' fontSize1 = '1rem' textColor1 = '#003e55'
                        number2 = '107000'  text2 = 'absolwentów' boxShadow2 = '#df3245' color2 = '#9f1b28' fontSize2 = '1rem' textColor2 = '#003e55'
                        number3 ='12' text3 = 'uniwersytetów technicznych' boxShadow3 = '#9f1b28' color3 ='#9f1b28' fontSize3 = '1rem' textColor3 = '#003e55'
                        number4 = '340' text4 = 'Uczestniczek biegu wu kasku' boxShadow4 = '#df3245' color4 = '#9f1b28' fontSize4 = '1rem' textColor4 = '#003e55'
                    />
                </section>
                <section className = 'container'>
                    <Article48 
                        art = {articles[0].itforshe}
                        src = 'nt/logo_nowe_technologie.png'
                        className = 'row my-4'
                    />
                </section>
                <section>
                   <ArticleRight
                    src = 'nt/nt_fot1.png'
                    art = {articles[0].article3}
                    className = 'row mx-0 article__right--frame'
                   />
                </section>
                <section className = 'container my-4'>
                    <ArticleFrameRight
                     art = {articles[0].article3}
                     srcImg = 'nt/nt_fot2.png'
                     srcFrame = 'nt/nt_trapez1.png'
                     classColRight = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                     classColLeft = 'col-12 col-lg-7 px-0 position-relative'
                     classImgFrame = 'articleFrameRight--frame'
                    />
                
                    <ArticleFrameLeft
                      art = {articles[0].article2}
                      srcImg = 'nt/nt_fot3.png'
                      srcFrame = 'nt/nt_trapez2.png'
                      classArticleContainer = 'text-right mx-2'
                        classColRight = 'col-12 col-lg-7 px-0 position-relative'
                        classColLeft = 'col-12 col-lg-5 px-0 d-flex flex-column justify-content-center'
                        classImgFrame = 'articleFrameLeft--frame'  
                    />
                </section>
                <section className = 'container text-center my-4'>
                    <iframe className = 'iframe' width="555" height="312" src="https://www.youtube.com/embed/Kvk02ECna8U" title = "new technologies for girls" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title></iframe>
                </section>
                <section>
                    <SectionName name = 'OUR PARTNERS' />
                    <Partners data = {NtPartners}/>
                </section>
            </div>
        )
    }
}

export default Nt;