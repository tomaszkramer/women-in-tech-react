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
            <div className = 'container'>
                <div className = 'row my-4'>
                    {this.state.data.map(el=>{
                        console.log(el.src);
                        return <div className = 'col d-flex justify-content-center align-items-center'>
                                <div className = 'partners--container text-center py-2' style = {{width: this.props.logoWidth}}>
                                <a href = {el.href} target = '_blank' rel = 'noopener noreferrer'>
                                    <img className = 'partners--img' src = {require(`${el.src}`)} alt = '' />
                                </a>
                                </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Partners;