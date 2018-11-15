import React, { Component } from 'react'
import { AboutClient, AboutWork, AboutPrice } from '../desktop/main/DetailedInformation'

class Information extends Component {
    render() {
        const { info } = this.props;
        return (
            <div className="portf__info">
                <AboutClient address={info.address} />
                <AboutWork area={info.area} glassType={info.glassType} />
                <AboutPrice price={info.price} />
                <div className="portf__center">
                    <button className="portf__info-btn modalbtn1">Хочу так же</button>
                </div>
            </div>
        );
    }
}

export default Information;