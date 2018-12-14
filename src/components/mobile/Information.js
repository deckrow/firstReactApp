import React from 'react'
import { AboutClient, AboutWork, AboutPrice } from '../desktop/DetailedInformation'

function Information(props) {
    return (
        <div className="portf__info">
            <AboutClient address={props.info.address} />
            <AboutWork area={props.info.area} glassType={props.info.glassType} />
            <AboutPrice price={props.info.price} />
            <div className="portf__center">
                <button className="portf__info-btn modalbtn1">Хочу так же</button>
            </div>
        </div>
    );
}

export default Information;