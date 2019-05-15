import React from 'react';
import MainWallpaper from '../MainWallpaper';
import ArticleVideo from '../ArticleVideo';

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
                    <ArticleVideo/>
                </section>
                <section>
                    
                </section>
            </div>
        )
    }
}

export default Overview;