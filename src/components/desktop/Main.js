import React, { Component } from 'react'
import Navigation from './Navigation'
import Image from './Image'
import Information from './Information'

class Main extends Component {
    render() {
        const { data, activeCategory, toggleCategory } = this.props
        const activeItem = data.find(val => {
            if (val.id === activeCategory.id)
                return val
        })

        const props = { data, activeItem, activeCategory, toggleCategory }

        return(
            <div className="portf__main">
                <Navigation {...props} />
                <Image {...props} />
                <Information {...props} />
            </div>
        );
    }
}

export default Main;