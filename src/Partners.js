import React from 'react';

class Partners extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount () {

        let data = this.props.data;
        this.setState({
            data: data,
        })
    }

    render () {
        return (
            <div></div>
        )
    }
}

export default Partners;