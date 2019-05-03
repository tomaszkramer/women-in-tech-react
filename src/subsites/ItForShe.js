import React from 'react';
import Navbar from '../Navbar';
import BottomBar from '../BottomBar';
import MainWallpaper from '../MainWallpaper';
import CircleBar from '../CircleBar';
import SectionName from '../SectionName';
import ChartJs from '../ChartJs';
import Article48 from '../Article48';
import ArticleTrapezoidRight from '../ArticleTrapezoidRight';
import {articles} from '../articles.json';


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
            <Navbar/>
            <MainWallpaper
                srcBg = 'subsites/it_for_she/itforshe_head.png'
                src1 = 'logo_glowne.png'
                src2 = 'it_for_she/it-for-she.png'
                className = 'wallpaper__logos--reverse'
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
                <ChartJs/>
            </section>
            <section>
                <SectionName name = 'TRZY DROGI UCZESTNICTWA'/>
               <ArticleTrapezoidRight
                text = "#1"
                art = {articles[0].program_mentoringowy}
                srcImg = 'it_for_she/it_fot1.png'
                srcElement = 'trapezoid.png'
                classColRight = 'col-12 col-lg-5 px-0 position-relative trapezoidRight--article'
                classColLeft = 'col-12 col-lg-7 px-0'
                classElementText = 'trapezoidRight--text'
                classImgElement = 'trapezoidRight--trapezoid'
               />
            </section>
            <div className = 'container position-relative text-center' style = {this.state.style}>Content will be available soon :-)</div>
            <section>
                <BottomBar/>
            </section>
        </div>
    }
}

export default ItForShe;