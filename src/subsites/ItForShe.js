import React from 'react';
import MainWallpaper from '../MainWallpaper';
import CircleBar from '../CircleBar';
import SectionName from '../SectionName';
import ChartJs from '../ChartJs';
import Article48 from '../Article48';
import ArticleTrapezoidRight from '../ArticleTrapezoidRight';
import ArticleTrapezoidLeft from '../ArticleTrapezoidLeft';
import ArticleTransparentRight from '../ArticleTransparentRight';
import Partners from '../Partners';
import {articles} from '../articles.json';
import ItForShePartners from '../ItForShePartners';
import ChartjsData from '../ChartjsData';


class ItForShe extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            style: {
                fontSize: '5rem',
                fontFamily: 'TravelingTypewriter'
            }
        }
    }
    render() {
        return <div>
            <div>
            <MainWallpaper
                srcBg = 'subsites/it_for_she/itforshe_head.png'
                src1 = 'logo_glowne.png'
                src2 = 'it_for_she/it-for-she.png'
                className = 'wallpaper__logos--reverse'
                logoBackground = '#9f1b28'
            />
            </div>
            <section>
                <CircleBar
                    number1 ='3' text1 = 'Edycje' boxShadow1 = '#9f1b28' color1 ='#9f1b28' fontSize1 = '1rem' textColor1 = '#003e55'
                    number2 = '50'  text2 = 'Par mentoringowych' boxShadow2 = '#df3245' color2 = '#9f1b28' fontSize2 = '1rem' textColor2 = '#003e55'
                    number3 ='4500' text3 = 'Dzieci w programie wolontariackim' boxShadow3 = '#9f1b28' color3 ='#9f1b28' fontSize3 = '1rem' textColor3 = '#003e55'
                    number4 = '340' text4 = 'Uczestniczek Women in Tech Camp' boxShadow4 = '#df3245' color4 = '#9f1b28' fontSize4 = '1rem' textColor4 = '#003e55'
                />
            </section>
            <section className = 'container'>
                <SectionName name = ''/>
                <Article48
                    art = {articles[0].itforshe}
                    src = 'it_for_she/logo-It-for-she.png'
                    className = 'row my-4'
                />
            </section>
            <section>
                <ChartJs
                    text = 'nasze akcje w latach'
                    borderColor = '#df3245'
                    backgroundColor = '#df3245'
                    beginAt = '9'
                    endAt = '18'
                    datalabelColor = '#df3245'
                    labels = {ChartjsData[0].itforshe.labels}
                    data = {ChartjsData[0].itforshe.data}
                />
            </section>
            <section>
                <SectionName name = 'TRZY DROGI UCZESTNICTWA'/>
               <ArticleTrapezoidRight
                text = "#1"
                art = {articles[0].program_mentoringowy}
                srcImg = 'it_for_she/it_fot1.png'
                srcElement = 'trapezoid.png'
                srcFrame = 'it_for_she/it_trapez_1.png'
                classColRight = 'col-12 col-lg-5 px-0 position-relative trapezoidRight--article'
                classColLeft = 'col-12 col-lg-7 px-0'
                srcTitle = 'it_for_she/mentore-mentee-it.png'
                classArticleContainer = 'trapezoidRight--container'
                classArticleTitle = 'trapezoidRight--title'
                classElementText = 'trapezoidRight--text'
                classImgElement = 'trapezoidRight--trapezoid'
                classImgFrame = 'trapezoidRight--frame'
                classImgExtension = 'img-fluid'
               />
               <ArticleTrapezoidLeft 
                text = '#2'
                art = {articles[0].it_tech_camp}
                srcImg = 'it_for_she/it_fot2.png'
                srcElement = 'trapezoid-white.png'
                srcFrame = 'it_for_she/it_trapez_2.png'
                classColRight = 'col-12 col-lg-7 px-0 position-relative'
                classColLeft = 'col-12 col-lg-5 px-0 trapezoidLeft--article'
                classArticleContainer = 'trapezoidLeft--container'
                srcTitle = 'it_for_she/mentore-mentee-it.png'
                classArticleTitle = 'trapezoidLeft--title'
                classElementText = 'trapezoidLeft--text'
                classImgElement = 'trapezoidLeft--trapezoid'
                classImgFrame = 'trapezoidLeft--frame'
               />
               <ArticleTrapezoidRight
                text = "#3"
                art = {articles[0].program_wolontariacki}
                srcImg = 'it_for_she/it_fot3.png'
                srcElement = 'trapezoid.png'
                srcFrame = 'it_for_she/it_trapez_1.png'
                classColRight = 'col-12 col-lg-5 px-0 position-relative trapezoidRight--article'
                classColLeft = 'col-12 col-lg-7 px-0'
                srcTitle = 'it_for_she/you-me-it.png'
                classArticleContainer = 'trapezoidRight--container'
                classArticleTitle = 'trapezoidRight--title'
                classElementText = 'trapezoidRight--text'
                classImgElement = 'trapezoidRight--trapezoid'
                classImgFrame = 'trapezoidRight--frame'
                classImgExtension = 'trapezoidRight--imgExtension'
               />
               <ArticleTransparentRight
                srcImg = 'it_for_she/it_fot4.png'
                srcElement = 'trapezoid-white-06.png'
                art = {articles[0].program_wolontariacki}
                classColLeft = 'col-12 col-lg-7 px-0 position-relative'
                classColRight = 'col-12 col-lg-5 px-0 transparentRight--article'
                classArticleContainer = 'transparentRight--container'
                classImgElement = 'transparentRight--trapezoid'
               />
            </section>
            <section>
                <SectionName name = 'NASI PARTNERZY' />
            </section>
            <section>
                <Partners data = {ItForShePartners}/>
            </section>
        </div>
    }
}

export default ItForShe;