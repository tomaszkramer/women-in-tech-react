import React from 'react';
import SectionName from './SectionName';

class ArticleVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            art: '',
            article: [],
        }
    }

    componentWillMount(){
        this.setState({
            art: this.props.art
        })
    }
    
    componentDidMount(){
        
        let myArt = []
        let myArticle = this.state.art;
        
        for(let par in myArticle){
            if (par !== 'title') {
                myArt.push(myArticle[par])  
            }
        }
        
        this.setState({
            article: myArt,
        })
       
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
                                    <iframe width="560" height="315" title = 'women summit' src="https://www.youtube.com/embed/WlpT94VglUA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-lg-2 px-0 articleVideo--colMiddle'>
                            <img className = 'w-100 h-100' src = {require('./img/triangleBlue.png')} alt =''/>
                        </div>
                        <div className = 'col-12 col-lg-5 d-flex flex-column justify-content-center px-0 articleVideo--colRight'>
                        <div className = ''>
                            <h4 className = 'p-2'>{this.state.art.title}</h4>
                            {this.state.article.map(el=>{
                                return <p className = 'p-2 pr-lg-4'>{el}</p>
                            })}
                        </div>
                        </div>
                    </div>   
                           
                </div>
            </div>
        )
    }
}

export default ArticleVideo;