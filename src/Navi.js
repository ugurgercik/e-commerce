import React, { Component } from 'react'

export default class Navi extends Component {

    
    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
            </div>
        )
    }
}
