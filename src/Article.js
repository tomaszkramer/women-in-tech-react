import React from 'react';
import {articles} from './articles.json';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: './img/',
            art: '',
            title: '',
            article: [],
            className: this.props.className
        }
    }

    componentWillMount(){
        this.setState({
            art: this.props.art
        })
    }
    
    componentDidMount(){
        
        let myArt = []
        let myTitle;
        let myArticle = this.state.art;
        for(let par in myArticle){
            if(par !== "title"){
                myArt.push(myArticle[par])
            } else {
                myTitle = myArticle[par]
            }
        }
        
        this.setState({
            article: myArt,
            title: myTitle
        })
    }
    
    render() {
        return (
            <div>
            <div className = {this.state.className}>
                <div className = 'text-center'>
                   <img className = 'img-fluid article--img' src = {require(`${this.state.imgPath}${this.props.src}`)} alt = ''></img>
                </div>
                <div className = 'mt-3'>
                   <p className = 'article--title'>{this.state.title}</p>
                   {this.state.article.map(el=>{
                       return <p>{el}</p>
                   })}
                </div>
            </div>
            </div>
        )
    }
}

export default Article;