import React from 'react'

class TeamMembers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            teamMembers : []
        }
    }

    componentDidMount () {
        let teamMembers = this.props.teamMembers;
        this.setState({
            teamMembers : teamMembers,
        })
    }

    render (){
        return (
            <div className = 'container'>

            </div>
        )
    }
}

export default TeamMembers;