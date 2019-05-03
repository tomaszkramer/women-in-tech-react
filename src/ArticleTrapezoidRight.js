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
                        <img className = {this.props.classImgFrame} src = {require(`${this.state.imgPath}${this.props.srcFrame}`)} alt =''></img>
                    </div>
                    <div className = {this.props.classColRight}>
                        <div className = 'position-relative px-2'>
                            <div className = 'mt-4'>
                                <h4 className = {this.props.classArticleTitle}>PROGRAM</h4>
                            </div>
                            <div>
                                <h2 className = {this.props.classArticleTitle}>MENTORINGOWY</h2>
                            </div>
                            <div className = {this.props.classElementText}>{this.props.text}</div>
                            <div>
                                <img className = 'img-fluid' src = {require(`${this.state.imgPath}${this.props.srcTitle}`)} alt = ''></img>
                            </div>
                        </div>
                        <p className = 'article--title px-2'>{this.state.title}</p>
                            {this.state.article.map(el=>{
                            return <p className = 'px-2'>{el}</p>
                            })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleTrapezoidRight;