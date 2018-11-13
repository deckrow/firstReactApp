import React, { Component } from 'react'
import Navigation from './Navigation'
import Image from './Image'
import Information from './Information'

class Main extends Component {
    render() {
        return(
            <div className="portf__main">
                <Navigation />
                <Image />
                <Information />
            </div>
        );
    }
}

export default Main;