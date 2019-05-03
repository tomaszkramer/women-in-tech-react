import React from 'react'; 

class ArticleTrapezoidRight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgPath: './img/subsites/',
            imgElement: './img/',
            art: this.props.art,
            title: '',
            article: [],
        }
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
        return(
            <div className = 'container-fluid'>
                <div className = 'row overflow-hidden'>
                    <div className = {this.props.classColLeft}>
                        <img className = 'w-100' src = {require(`${this.state.imgPath}${this.props.srcImg}`)} alt = ''></img>
                        <img className ={this.props.classImgElement} src = {require(`${this.state.imgElement}${this.props.srcElement}`)} alt =''></img>
                    </div>
                    <div className = {this.props.classColRight}>
                        <div className = {this.props.classElementText}>{this.props.text}</div>
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

export default ArticleTrapezoidRight;