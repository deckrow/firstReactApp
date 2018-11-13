import React, { Component } from 'react'
import { AboutClient, AboutWork, AboutPrice } from '../desktop/main/DetailedInformation'

class Information extends Component {
    render() {
        return (
            <div className="portf__info">
                <AboutClient address={this.props.info.address} />
                <AboutWork area={this.props.info.area} glassType={this.props.info.glassType} />
                <AboutPrice price={this.props.info.price} />
                <div className="portf__center">
                    <button className="portf__info-btn modalbtn1">Хочу так же</button>
                </div>
            </div>
        );
    }
}

export default Information;