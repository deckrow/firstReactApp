import React, { Component } from 'react'
import Image from './Image'
import Information from './Information'
import Slider from 'react-slick'
//import { clientInfo } from '../info'

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
    slide = (el, i) => {
        if (el.charAt(0) === this.props.first.toString()) {
            return (
                <div className="portf__slide" key={i}>
                    <Image img={clientInfo[el].img}/>
                    <Information info={clientInfo[el]}/>
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
                    {Object.keys(clientInfo).map(this.slide)}
                </Slider>
            </div>
        );
    }
}

export default Main;