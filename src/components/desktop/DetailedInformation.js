import React from 'react'

export const AboutClient = (props) => {
    return(
        <div className="portf__info-section">
            <p className="portf__info-title">О клиенте:</p>
            <p className="portf__info-descr">Адрес: <span className="address">{props.address}</span></p>
            <a href="" className="portf__info-link">Смотреть отзыв</a>
        </div>
    );
}

export const AboutWork = (props) => {
    return(
        <div className="portf__info-section">
            <p className="portf__info-title">Изделие:</p>
            <p className="portf__info-descr">Площадь: <span className="area">{props.area}</span></p>
            <p className="portf__info-descr last">{props.glassType}</p>
        </div>
    );
}

export const AboutPrice = (props) => {
    return <p className="portf__info-title">Цена: <span className="price">{props.price} руб.</span></p>;
}