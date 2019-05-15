import React from "react";

class ArticleBackgroundImageRight extends React.Component {
    constructor(props) {
        super(props)
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
            if(par !== 'title'){

                myArt.push(myArticle[par])  
            }
        }
        
        this.setState({
            article: myArt,
        })
    }

    render() {
        
        return (
            <div className = 'container-fluid d-flex justify-content-center articleBackgroundImageRight'>
                    <div className = 'row py-4 ArticleBackgroundImageRight--container'>
                        <div className = 'col-12 col-lg-6 ArticleBackgroundImageRight--article'>
                        </div>
                        <div className = 'col-12 col-lg-6'>
                            <div className = 'articleBackgroundImageRight--article'>
                                <h2>{this.state.art.title}</h2>
                                {this.state.article.map(el=>{
                                    return <p>{el}</p>
                                })}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ArticleBackgroundImageRight;