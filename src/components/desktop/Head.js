import React, { Component } from 'react'
import Context from './context'
import { categorys } from '../info'

class Head extends Component {
    static contextType = Context;

    navItem = (name, i) => {
        const { first, toggle } = this.context;

        return (
            <li 
                className={first === i ? 'portf__nav-item active' : 'portf__nav-item'} 
                key={i} 
                onClick={() => {
                    toggle('activeCategory', i);
                    toggle('activeSubCategory', 0);
                }}
            >
                {name}
            </li>
        );
    }

    render() {
        return(
            <div className="portf__header">
                <ul className="portf__nav">
                    {categorys.map(this.navItem)}
                </ul>
            </div>
        );
    }
}

export default Head;