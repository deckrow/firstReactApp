import React, { Component } from 'react'
import Image from './Image'
import Information from './Information'
import Slider from 'react-slick'

function Arrow(props) {
    const { classN, src, onClick } = props;

    return (
        <img
            className={classN}
            src={src}
            onClick={onClick}
        />
    );
}

class Main extends Component {
    slide = (val, i) => {
        if (val.categoryName === this.props.activeCategory.name) {
            return (
                <div className="portf__slide" key={i}>
                    <Image img={val.img}/>
                    <Information info={val}/>
                </div>
            );
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            nextArrow: <Arrow src="img/right-arr.png" classN="portf__arr right" />,
            prevArrow: <Arrow src="img/left-arr.png" classN="portf__arr left" />
        };
        
        return (
            <div className="portf__slider">
                <Slider {...settings}>
                    {this.props.data.map(this.slide)}
                </Slider>
            </div>
        );
    }
}

export default Main;