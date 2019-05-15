import React from 'react';
import MainWallpaper from '../MainWallpaper';
import ArticleVideo from '../ArticleVideo';
import ArticleBackgroundImageRight from '../ArticleBackgroundImageRight';
import SectionName from '../SectionName';
import TeamMember from '../TeamMember';
import {articles} from '../articles.json';
import teamMembers from '../OverviewTeamMembers';

class Overview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
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
                <section>
                    <SectionName name = 'TEAM' />
                    <TeamMember
                      imgSrc = 'overview/bianka2.png'
                      name = 'Bianka Siwińska'
                      title = 'CEO and Summit Director'
                      email = 'b.siwinska@perspektywy.pl'
                      tel = '501 535 785'
                      />
                </section>
            </div>
        )
    }
}

export default Overview;