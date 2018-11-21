import React, { Component } from 'react'
import SortingButton from './SortingButton'
import Main from './Main'

class Mobile extends Component {
    constructor(props) {
        super(props);

        this.state = { activeCategory: 0 };
    }

    toggleCategory = (newState) => {
        this.setState({ activeCategory: newState });
    }

    render() {
        return (
            <>
                <SortingButton 
                    first={this.state.activeCategory} 
                    toggle={this.toggleCategory} 
                />
                <Main 
                    first={this.state.activeCategory} 
                    toggle={this.toggleCategory} 
                />
            </>
        );
    }
}

export default Mobile;