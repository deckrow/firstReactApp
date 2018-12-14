import React from 'react'
import { AboutClient, AboutWork, AboutPrice } from './DetailedInformation'

function Information(props) {
    return(
        <div className="portf__info">
            <AboutClient address={props.activeItem.address} />
            <AboutWork area={props.activeItem.area} glassType={props.activeItem.glassType} />
            <AboutPrice price={props.activeItem.price} />
            <button className="portf__info-btn modalbtn1">Хочу так же</button>
        </div>
    );
}


export default Information;