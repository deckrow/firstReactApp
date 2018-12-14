import React from 'react'

function Image (props) {
    return (
        <div className="portf__img">
            <img src={'img/' + props.img} className="main-img" />
        </div>
    );
}

export default Image;