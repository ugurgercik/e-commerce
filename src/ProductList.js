import React, { Component } from 'react';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.info.title} / {this.props.currentCategory} </h2>
            </div>
        )
    }
}
