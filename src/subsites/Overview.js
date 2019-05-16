import React from 'react';
import MainWallpaper from '../MainWallpaper';
import ArticleVideo from '../ArticleVideo';
import ArticleBackgroundImageRight from '../ArticleBackgroundImageRight';
import SectionName from '../SectionName';
import TeamMember from '../TeamMember';
import TeamMembers from '../TeamMembers';
import ArticleBackgroundImage from '../ArticleBackgroundImage';
import {articles} from '../articles.json';
import background from '../img/subsites/overview/puchar.jpg';

class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            background: background,
        }
    }

    componentDidMount () {
        this.setState({
            background : background,
        })
    }

    render() {
        return(
            <div>
                <div>
                    <MainWallpaper 
                      srcBg = 'glowa.jpg'
                      src1 = 'logo_glowne.png'
                      src2 = 'stem/lean_in_stem.png'
                      className = 'wallpaper__logos--straight'
                      logoBackground = '#74a6ed'
                    />
                </div>
                <section className = 'container-fluid'>
                    <ArticleVideo
                        art = {articles[0].article2}
                    />
                </section>
                <section>
                    <ArticleBackgroundImageRight
                        art = {articles[0].article4}
                    />
                </section>
                <section className = 'container-fluid'>
                    <SectionName name = 'TEAM' />
                    <TeamMember
                      imgSrc = 'subsites/overview/bianka2.png'
                      name = 'Bianka Siwińska'
                      title = 'CEO and Summit Director'
                      email = 'b.siwinska@perspektywy.pl'
                      tel = '501 535 785'
                      />
                      <TeamMembers />
                </section>
                <section>
                    <ArticleBackgroundImage
                        art = {articles[0].article4}
                        backgroundImage = {this.state.background}
                    />
                </section>
            </div>
        )
    }
}

export default Overview;