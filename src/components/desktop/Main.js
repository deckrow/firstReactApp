import React from 'react'
import Navigation from './Navigation'
import Image from './Image'
import Information from './Information'

function Main(props) {
    const activeItem = props.data.find(val => {
        if (val.id === props.activeCategory.id)
            return val
    })

    return(
        <div className="portf__main">
            <Navigation {...props} />
            <Image {...props} activeItem={activeItem} />
            <Information {...props} activeItem={activeItem} />
        </div>
    );
}

export default Main;