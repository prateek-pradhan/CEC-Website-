import React, {useEffect} from 'react'
import { Slideshow } from './Slideshow'
import { News } from './News'
import { ImageSlider } from './ImageSlider'
import './css/Home.css'
import yt from '../../assets/yt-logo.png'
import tele from '../../assets/tele-logo.png'
import dis from '../../assets/dis-logo.png'
import insta from '../../assets/insta-logo.png'
import { Container } from 'react-bootstrap'
import Aos from "aos"
import "aos/dist/aos.css"
import '../../App.css'


export const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="main-body bgLogo">
            <div data-aos="fade-up" class="row">
                <div class="col-lg-6">
                    <div class="slideshow">
                        <Slideshow />
                    </div>
                </div>
                <div class="col-lg-6">
                    <News />
                </div>
            </div>
            <div data-aos="fade-left" className="row socials">
                <div className="col-sm content">
                    <h1>Connect with us</h1>
                </div>
                <div className="col-sm-auto content">
                    <h5 className="light-content">Join our socials for<br />the latest content and updates</h5>
                </div>
                <div className="col-sm content">
                    <a href="https://discord.com/invite/jvdjmZSJgJ" target="_blank" rel="noreferrer"><img className="social-logo" src={dis} alt="discord" /></a>
                    <a href="https://www.instagram.com/chitkaraesports/" target="_blank" rel="noreferrer"><img className="social-logo" src={insta} alt="instagram" /></a>
                    <a href="https://t.me/joinchat/135fr-RWUqo3M2I1" target="_blank" rel="noreferrer"><img className="social-logo" src={tele} alt="telegram" /></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><img className="social-logo" src={yt} alt="youtube" /></a>
                </div>
            </div>
            <Container data-aos="fade-down" className="about" >
                <h1 className="about-title">About Us</h1>
                <p className="about-content">Chitkara Esports Club (formerly known as Esports Chitkara Club) is a club managed by students here at Chitkara University. We host online <br />
                    gaming events and try our best to provide you with the latest esports content available. Stay in touch to be part of this beautiful journey <br />
                    through the growing esports scene in the country.  </p>
            </Container>
            <Container data-aos="fade-up" className="featured">
                <h1 className="featured-title">Featured</h1>
                <ImageSlider />
            </Container>
        </div>
    )
}
