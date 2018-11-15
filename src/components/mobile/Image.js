import React, { Component } from 'react'

class Image extends Component {
    render() {
        return (
            <div className="portf__img">
                <img src={'img/' + this.props.img} className="main-img" />
            </div>
        );
    }
}

export default Image;