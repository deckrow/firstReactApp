import React, { Component } from 'react'
import Context from '../context'
import { subCategorys, clientInfo } from '../../info'

class Image extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        
        this.state = {
            activeCat: 1,
            preloadCat: []
        };
    }

    preloadImg() {
        Object.keys(clientInfo).map((el, i) => {
            if (el.charAt(0) === this.context.first.toString()) {
                const img = document.createElement('img');
                img.src = './img/' + clientInfo[el].img;
            }
        });
    }

    componentWillMount() {
        this.preloadImg();

        this.setState(state => ({ 
            activeCat: this.context.first,
            preloadCat: [...state.preloadCat, this.context.first]
        }));
    }

    componentDidUpdate() {
        if (this.state.activeCat !== this.context.first && 
            this.state.preloadCat.indexOf(this.context.first) === -1) {
            this.preloadImg();

            this.setState(state => ({ 
                activeCat: this.context.first,
                preloadCat: [...state.preloadCat, this.context.first]
            }));
        }
    }

    prevCategory = () => {
        const last = subCategorys[this.context.first].length;
            
        this.context.second !== 0
            ? this.context.toggle('activeSubCategory', this.context.second - 1)
            : this.context.toggle('activeSubCategory', last - 1)
    }

    nextCategory = () => {
        const last = subCategorys[this.context.first].length;
            
        this.context.second !== last - 1
            ? this.context.toggle('activeSubCategory', this.context.second + 1)
            : this.context.toggle('activeSubCategory', 0)
    }
    
    render() {
        return(
            <div className="portf__img">
                <img 
                    src="./img/left-arr.png" 
                    className="portf__img-arr left" 
                    onClick={this.prevCategory} 
                />
                <img 
                    src={'./img/' + clientInfo[`${this.context.first}${this.context.second}`].img} 
                    className="main-img" 
                />
                <img 
                    src="./img/right-arr.png" 
                    className="portf__img-arr right" 
                    onClick={this.nextCategory} 
                />
            </div>
        );
    }
}

export default Image;