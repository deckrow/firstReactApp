import React, { Component } from 'react'
import Context from '../context'
import { subCategorys } from '../../info'

class Navigation extends Component {
    static contextType = Context;

    navItem = (name, i) => {
        const { toggle, first, second } = this.context;
        const count = subCategorys[first].length;
        
        return (
            <li className={second === i ? 'portf__nav2-item active' : 'portf__nav2-item'} 
                style={{ width: 100 / count + '%' }}
                key={i} 
                onClick={() => toggle('activeSubCategory', i)}>
                {name}
            </li>
        );
    }

    render() {
        return(
            <ul className="portf__nav2">
                {subCategorys[this.context.first].map(this.navItem)}        
            </ul>
        );
    }
}

export default Navigation;