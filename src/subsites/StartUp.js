import React from 'react'
import Mainwallpaper from '../MainWallpaper';
import CircleBar from '../CircleBar';
import Article48 from '../Article48';
import ChartJs from '../ChartJs';
import ArticleRight from '../ArticleRight'
import SectionName from '../SectionName';
import Partners from '../Partners';
import {articles} from '../articles.json'
import ChartjsData from '../ChartjsData';
import StartUpPartners from '../StartUpPartners';

class StartUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <div>
                <div>
                    <Mainwallpaper 
                     srcBg = 'subsites/startup/startup_head.png'
                     src1 = 'logo_glowne.png'
                     src2 = 'startup/start-up.png'
                     className = 'wallpaper__logos--reverse' 
                     logoBackground = '#d89ac3' 
                    />
                </div>
                <section>
                    <CircleBar
                            number1 = '12' text1 = 'lat' boxShadow1 = '#d0108a' color1 = '#d0108a' textColor1 = '#23576c' fontSize1 = '1.3rem'
                            number2 = '107000' text2 = 'absolwentów' boxShadow2 = '#fc7dcc' color2 = '#d0108a' textColor2 = '#23576c' fontSize2 = '1.3rem'
                            number3 = '12' text3 = 'uczelni technicznych' boxShadow3 = '#d0108a' color3 = '#d0108a' textColor3 = '#23576c' fontSize3 = '1.3rem'
                            number4 = '340' text4 = 'uczestniczek biegu w kasku' boxShadow4 = '#fc7dcc' color4 = '#d0108a' textColor4 = '#23576c' fontSize4 = '1.3rem'
                        />
                </section>
                <section className = 'container'>
                    <Article48
                            art = {articles[0].itforshe}
                            src = 'startup/logo-start-up.png'
                            className = 'row'
                        />
                </section>
                <section>
                    <ChartJs 
                        text = 'akcja girls go start up academy w liczbach'
                        borderColor = '#cf118d'
                        backgroundColor = '#cf118d'
                        beginAt = '7'
                        endAt = '21'
                        datalabelColor = '#fa7dcb'
                        labels = {ChartjsData[0].startup.labels}
                        data = {ChartjsData[0].startup.data}
                    />
                </section>
                <section>
                <ArticleRight
                    src = 'startup/startup-fot1.png'
                    art = {articles[0].article3}
                    className = 'row mx-0 article__right--frame'
                   />
                </section>
                <section>
                    <SectionName name = 'OUR PARTNERS' />
                    <Partners data = {StartUpPartners}
                              logoWidth = '300px'  
                    />
                </section>
            </div>
        )
    }
}

export default StartUp;