import React, { Component } from 'react'
import Desktop from './desktop'
import Mobile from './mobile'

class App extends Component {
    render() {
        return(
            <div className="container">
                <h2 className="portf__title">Наши работы</h2>
                {window.innerWidth < 992 ? <Mobile /> : <Desktop />}
            </div>
        );
    }
}

export default App;