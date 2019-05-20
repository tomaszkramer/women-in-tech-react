import React from 'react';

class ArticleRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: './img/subsites/',
            art: '',
            article: [],
            id: '',
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
        
        let myArt = [];
        let myId;
        let myArticle = this.state.art;
        
        for(let par in myArticle){
            if(par !== "id"){
                myArt.push(myArticle[par])
            } else {
                myId = myArticle[par]
            }
        }
        
        this.setState({
            article: myArt,
            id: myId,
        })
    }
 
    render() {
        return (
            <div className = "pb-4" style = {this.state.style}>
            <div className = {this.state.className}>
                <div className = 'col-12 col-xl-6 d-flex flex-column justify-content-center px-0'>
                   <img className = 'img-fluid article__right--img' src = {require(`${this.state.imgPath}${this.props.src}`)} alt = '' style ={{height: this.props.imgHeight}}></img>
                </div>
                <div className = 'col-12 col-xl-6 d-flex flex-column justify-content-center articleRight--frame'>
                    <div className = 'article__right--article' style = {{width: this.props.articleWidth}}>
                        <h4>{this.state.art.title}</h4>
                        {this.state.article.map(el=>{
                            return <p className = 'px-2' key = {el}>{el}</p>
                        })}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default ArticleRight;