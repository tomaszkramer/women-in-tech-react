import React from 'react';
import {articles} from './articles.json';

class Article48 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: './img/subsites/',
            art: '',
            article: [],
            className: this.props.className,
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
            <div className = "pb-4">
            <div className = {this.state.className}>
                <div className = 'col-12 col-xl-4 d-flex flex-column justify-content-center'>
                   <img className = 'article__48--itfs--img' src = {require(`${this.state.imgPath}${this.props.src}`)} alt = ''></img>
                </div>
                <div className = 'col-12 col-xl-8 d-flex flex-column justify-content-center'>
                   {this.state.article.map(el=>{
                       return <p>{el}</p>
                   })}
                </div>
            </div>
            </div>
        )
    }
}

export default Article48;