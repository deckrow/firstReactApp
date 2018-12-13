import React, { Component } from 'react'

class Image extends Component {
    prevCategory = () => {
        const { data, activeCategory, toggleCategory } = this.props

        for (let i = activeCategory.id - 2; i >= 0; i--) {
            if (data[i].categoryName === activeCategory.name) {
                toggleCategory(data[i].id, data[i].categoryName)
                break
            }
        }
    }

    nextCategory = () => {
        const { data, activeCategory, toggleCategory } = this.props

        for (let i = activeCategory.id; i < data.length; i++) {
            if (data[i].categoryName === activeCategory.name) {
                toggleCategory(data[i].id, data[i].categoryName)
                break
            }
        }
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
                    src={'./img/' + this.props.activeItem.img} 
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