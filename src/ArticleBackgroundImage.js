import React from "react";
// import background from './img/subsites/overview/puchar.jpg'

class ArticleBackgroundImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgPath: './img/subsites/',
            art: '',
            article: [],
            className: this.props.className,
            backgroundImage : '',
            color: ''
        }
    }

    componentWillMount(){
        this.setState({
            art: this.props.art,
            backgroundImage : this.props.backgroundImage,
            color: this.props.color,
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
            backgroundImage: this.props.backgroundImage,
        })
    }

    render() {
        
        return (
            <div className = 'container-fluid d-flex justify-content-center articleBackgroundImage'style = {{backgroundImage: "url("+this.state.backgroundImage+")"}}>
                {/* <img className = 'img-fluid' src = {require(`${this.state.imgPath}${this.props.src}`)} alt = ''></img> */}
                    <div className = 'row py-4 articleBackgroundImage--container'>
                        <div className = 'col-12 col-lg-6' style = {{color: this.state.color}}>
                            <div className = ''>
                                <h2>{this.state.art.title}</h2>
                                {this.state.article.map(el=>{
                                    return <p>{el}</p>
                                })}
                            </div>
                        </div>
                        <div className = 'col-12 col-lg-6'></div>
                    </div>
            </div>
        )
    }
}

export default ArticleBackgroundImage;