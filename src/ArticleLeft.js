import React from 'react';
import {articles} from './articles.json';

class ArticleLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: './img/subsites/',
            art: '',
            article: [],
            className: this.props.className,
            style: {
                // borderBottom: "1px solid lightgrey"
            }
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
                myArt.push(myArticle[par])  
        }
        
        this.setState({
            article: myArt,
        })
       
    }

    
        
    render() {
        return (
            <div className = "container-fluid pb-4" style = {this.state.style}>
                <div className = {this.state.className}>
                    <div className = 'col-12 col-xl-6 d-flex flex-column justify-content-center px-0'>
                        <div className = 'article__left--article'>
                            <h4 className = ''>{this.state.art.title}</h4>
                            {this.state.article.map(el=>{
                                return <p className = 'pr-4'>{el}</p>
                            })}
                        </div>
                    </div>
                    <div className = 'col-12 col-xl-6 d-flex flex-column justify-content-center px-0'>
                        <img className = 'img-fluid article__left--img' src = {require(`${this.state.imgPath}${this.props.src}`)} alt = ''></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleLeft;