import React,{useState} from 'react'
import './css/Home.css'
import Slider from 'react-slick'
import bgmi from '../../assets/bgmi-logo.jpg'
import val from '../../assets/val-logo.jpg'
import csgo from '../../assets/csgo-logo.jpg'
import apex from '../../assets/apex-logo.jpg'
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa'

const images = [val, csgo, apex, bgmi]

export const ImageSlider = () => {

    const NextArrow = ({onClick}) => {
        return(
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return(
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)

    const small = window.matchMedia("(max-width: 600px)");

    const settings ={
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };

    if (small.matches){
        settings.slidesToShow = 1;
    }

    return (
        <div>
            <Slider {...settings}>
               {images.map((img,idx) => (
                   <div className={idx === imageIndex ? "cars activeSlide" : "cars"}>
                       <img src={img} alt={img}/>
                   </div>
               ))}
            </Slider> 
        </div>
    )
}
