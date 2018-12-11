import React, { Component } from 'react'

class Navigation extends Component {
    subCategoryGeneration() {
        const { data, activeCategory } = this.props
        const subCategorys = data.filter(val => {
            if (val.categoryName === activeCategory.name)
                return val
        })

        return subCategorys
    }

    componentWillMount() {
        this.setState({ 
            subCategorys: this.subCategoryGeneration(),
            active: this.props.activeCategory.name
        })
    }

    componentDidUpdate() {
        const { activeCategory } = this.props
        const { active } = this.state

        if (active !== activeCategory.name)
            this.setState({ 
                subCategorys: this.subCategoryGeneration(),
                active: activeCategory.name
            })
    }

    navItem = (item, i, arr) => {
        const { activeCategory, toggleCategory } = this.props
        const { subCategoryName, id } = item

        return (
            <li 
                className={id === activeCategory.id ? 'portf__nav2-item active' : 'portf__nav2-item'} 
                style={{ width: 100 / arr.length + '%' }}
                key={id} 
                onClick={() => toggleCategory(id, activeCategory.name)}
            >
                {subCategoryName}
            </li>
        )
    }

    render() {
        return(
            <ul className="portf__nav2">
                {this.state.subCategorys.map(this.navItem)}
            </ul>
        );
    }
}

export default Navigation;