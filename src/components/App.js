import React, { Component } from 'react'
import Desktop from './desktop/DesktopApp'
import Mobile from './mobile/MobileApp'

class App extends Component {
    render() {
        const monWidth = window.innerWidth;

        return(
            <div className="container">
                <h2 className="portf__title">Наши работы</h2>
                {monWidth < 992 ? <Mobile /> : <Desktop />}
            </div>
        );
    }
}

export default App;