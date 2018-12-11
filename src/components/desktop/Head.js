import React, { Component } from 'react'

class Head extends Component {
    componentWillMount() {
        const { data } = this.props;
        
        const categorys = [...new Set(data.map(val => val.categoryName))].map(name => {
            return {
                'name': name,
                'id': data.find(val => val.categoryName === name).id
            }
        })

        this.setState({ categorys })
    }

    navItem = (item, i) => {
        const { toggleCategory, activeCategory } = this.props;
        const { name, id } = item

        return (
            <li 
                className={name === activeCategory.name ? 'portf__nav-item active' : 'portf__nav-item'} 
                key={id} 
                onClick={() => toggleCategory(id, name)}
            >
                {name}
            </li>
        )
    }

    render() {
        return(
            <div className="portf__header">
                <ul className="portf__nav">
                    {this.state.categorys.map(this.navItem)}
                </ul>
            </div>
        )
    }
}

export default Head