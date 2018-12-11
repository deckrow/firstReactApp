import React, { Component } from 'react'
import { AboutClient, AboutWork, AboutPrice } from './DetailedInformation'

class Information extends Component {
    render() {
        const { activeItem } = this.props

        return(
            <div className="portf__info">
                <AboutClient address={activeItem.address} />
                <AboutWork area={activeItem.area} glassType={activeItem.glassType} />
                <AboutPrice price={activeItem.price} />
                <button className="portf__info-btn modalbtn1">Хочу так же</button>
            </div>
        );
    }
}

export default Information;