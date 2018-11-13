import React, { Component } from 'react'
import Head from './header/Head'
import Main from './main/Main'
import Context from './context'

class Desktop extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            activeCategory: 0,
            activeSubCategory: 0
        };
    }

    toggle = (name, newState) => {
        this.setState({[name]: newState})
    }

    render() {
        return(
            <Context.Provider value={{
                first: this.state.activeCategory,
                second: this.state.activeSubCategory,
                toggle: this.toggle
            }}>
                <Head />
                <Main /> 
            </Context.Provider>
        );
    }
}

export default Desktop;