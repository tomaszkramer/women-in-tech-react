import React from 'react'
import TeamMember from './TeamMember';
import members from './OverviewTeamMembers';

class TeamMembers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            teamMembers : []
        }
    }

    componentDidMount () {
        this.setState({
            teamMembers : members,
        })
    }

    render (){
        return (
            <div className = 'row'>
                {this.state.teamMembers.map(el =>{
                    return <div className = 'col-12 col-md-6 col-lg-4'>
                        <TeamMember
                            imgSrc = {el.photo}
                            name = {el.name}
                            title = {el.title}
                            email = {el.email}
                            tel = {el.tel}
                        />
                    </div>
                })}
            </div>
        )
    }
}

export default TeamMembers;