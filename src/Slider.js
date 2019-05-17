import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import pic from './img/akcja3.png';
import pic2 from './img/akcja1.png';


class SimpleSlider extends React.Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        }
        return (
            <div className = 'slider'>
                <Slider {...settings}>
                    <Slide slideFront ='dnp.png' slideBack = 'dnp2.png' link = '/Dnp'/>
                    <Slide slideFront = 'itforshe.png' slideBack = 'itforshe2a.png' link = '/ItForShe' />
                    <Slide slideFront = 'NT.png' slideBack = 'NT2.png' link = '/Nt'/>
                    <Slide slideFront = 'startup.png' slideBack = 'startup2.png' link = '/StartUp'/>
                    <Slide slideFront = 'stem.png' slideBack = 'stem_2.png' link = '/LeanInStem' />
                    <Slide slideFront = 'summit.png' slideBack = 'summit2.png' link = '/Summit'/>
                </Slider>
            </div>
        )
    }
}

export default SimpleSlider;