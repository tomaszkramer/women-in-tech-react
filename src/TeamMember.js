import React from 'react';

class TeamMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgPath: './img/subsites/',
            imgSrc: this.props.imgSrc,
        }
    }
    render(){
        return(
            <div className = 'text-center'>
                <div className = 'overview--teamFrame'>
                    <img src = {require(`${this.state.imgPath}${this.state.imgSrc}`)} alt = ''/>
                </div>
                <div className = 'overview--teamDescription'>
                    <h3>{this.props.name}</h3>
                    <p className = 'mb-0'>{this.props.title}</p>
                    <p className = 'mb-0'>{this.props.email}</p>
                    <p>{this.props.tel}</p>
                </div>
            </div>
        )
    }
}
export default TeamMember;