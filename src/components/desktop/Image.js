import React, { Component } from 'react'

class Image extends Component {
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //         activeCat: 1,
    //         preloadCat: []
    //     };
    // }

    // preloadImg() {
    //     Object.keys(clientInfo).map((el, i) => {
    //         if (el.charAt(0) === this.context.first.toString()) {
    //             const img = document.createElement('img');
    //             img.src = './img/' + clientInfo[el].img;
    //         }
    //     });
    // }

    // componentWillMount() {
    //     this.preloadImg();

    //     this.setState(state => ({ 
    //         activeCat: this.context.first,
    //         preloadCat: [...state.preloadCat, this.context.first]
    //     }));
    // }

    // componentDidUpdate() {
    //     const { first } = this.context;
    //     const { preloadCat, activeCat } = this.state;
        
    //     if (activeCat !== first && preloadCat.indexOf(first) === -1) {
    //         this.preloadImg();

    //         this.setState(state => ({ 
    //             activeCat: first,
    //             preloadCat: [...state.preloadCat, first]
    //         }));
    //     }
    // }

    prevCategory = () => {
        const { data, activeCategory } = this.props


    }

    nextCategory = () => {
        const { data, activeCategory } = this.props

        
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