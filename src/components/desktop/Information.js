import React, { Component } from 'react'
import Context from './context'
import { AboutClient, AboutWork, AboutPrice } from './DetailedInformation'
import { clientInfo } from '../info'

class Information extends Component {
    static contextType = Context;

    render() {
        const queryStr = `${this.context.first}${this.context.second}`;
        const info = clientInfo[queryStr];

        return(
            <div className="portf__info">
                <AboutClient address={info.address} />
                <AboutWork area={info.area} glassType={info.glassType} />
                <AboutPrice price={info.price} />
                <button className="portf__info-btn modalbtn1">Хочу так же</button>
            </div>
        );
    }
}

export default Information;