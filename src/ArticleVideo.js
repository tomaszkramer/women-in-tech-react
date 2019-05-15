import React from 'react';
import SectionName from './SectionName';

class ArticleVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render () {
        return(
            <div className = 'articleVideo'>
                <div className = 'articleVideo--backgroundContainer'>
                    <div className = 'row w-100 h-100 mx-0'>
                        <div className = 'col-12 col-lg-5 px-0 pb-4 position-relative articleVideo--colLeft'>
                            <div className = 'position-relative articleVideo--videoFrame'>
                                <h2 className = 'mt-4 mb-4'>OVERVIEW</h2>
                                <div className = 'articleVideo--videoWrapper'>
                                    <iframe width="560" height="315" title = 'women summit' src="https://www.youtube.com/embed/WlpT94VglUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-2 px-0 articleVideo--colMiddle'>
                            <img className = 'w-100 h-100' src = {require('./img/triangleBlue.png')} alt =''/>
                        </div>
                        <div className = 'col-12 col-lg-5 px-0 pb-4 articleVideo--colRight'></div>
                    </div>   
                           
                </div>
            </div>
        )
    }
}

export default ArticleVideo;