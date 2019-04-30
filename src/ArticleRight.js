import React from 'react';
import {articles} from './articles.json';

class ArticleRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: './img/subsites/',
            art: '',
            article: [],
            className: this.props.className,
            style: {
                borderBottom: "1px solid lightgrey"
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
            <div className = "pb-4" style = {this.state.style}>
            <div className = {this.state.className}>
                <div className = 'col-12 col-xl-6 d-flex flex-column justify-content-center'>
                   <img className = 'img-fluid article__right--img' src = {require(`${this.state.imgPath}${this.props.src}`)} alt = ''></img>
                </div>
                <div className = 'col-12 col-xl-6 d-flex flex-column justify-content-center'>
                   {this.state.article.map(el=>{
                       return <p>{el}</p>
                   })}
                </div>
            </div>
            </div>
        )
    }
}

export default ArticleRight;