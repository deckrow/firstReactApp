import React, { Component } from 'react'
import Context from '../context'
import { subCategorys } from '../../info'

class Navigation extends Component {
    static contextType = Context;

    navItem = (name, i) => {
        let count = subCategorys[this.context.first].length;
        return (
            <li className={this.context.second === i ? 'portf__nav2-item active' : 'portf__nav2-item'} 
                style={{ width: 100 / count + '%' }}
                key={i} 
                onClick={() => this.context.toggle('activeSubCategory', i)}>
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