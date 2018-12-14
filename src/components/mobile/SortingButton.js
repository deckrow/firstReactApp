import React, { Component } from 'react'

class SortingButton extends Component {
    handleChange(e) {
        this.props.toggleCategory(0, e.target.value);
    }

    showCategory = (name, i) => {
        return <option key={i} value={name}>{name}</option>
    }

    render() {
        const categorys = [...new Set(this.props.data.map(val => val.categoryName))]

        return (
            <div className="portf__select">
                <select 
                    className="portf__select-btn"
                    value={this.props.activeCategory.name}
                    onChange={this.handleChange.bind(this)}
                >
                    {categorys.map(this.showCategory)}
                </select>
            </div>
        );
    }
}

export default SortingButton;