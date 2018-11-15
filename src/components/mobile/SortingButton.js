import React, { Component } from 'react'
import { categorys } from '../info'

class SortingButton extends Component {
    constructor(props) {
        super(props);

        this.state = { activeCategory: 0 }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const val = parseInt(event.target.value, 10);

        this.setState({activeCategory: val});
        this.props.toggle(val);
    }

    showCategory = (name, i) => {
        return <option key={i} value={i}>{name}</option>
    }

    render() {
        return (
            <div className="portf__select">
                <select className="portf__select-btn" 
                    value={this.state.activeCategory} 
                    onChange={this.handleChange}
                >
                    {categorys.map(this.showCategory)}
                </select>
            </div>
        );
    }
}

export default SortingButton;