import React from 'react'
import { Slideshow } from './Slideshow'
import { News } from './News'
import './css/Home.css'
import yt from '../../assets/yt-logo.png'
import tele from '../../assets/tele-logo.png'
import dis from '../../assets/dis-logo.png'
import insta from '../../assets/insta-logo.png'
import '../../App.css'


export const Home = () => {
    return (
        <div className="main-body bgLogo">
            <div class="row">
                <div class="col-md-6">
                    <div class="slideshow">
                        <Slideshow />
                    </div>
                </div>
                <div class="col-md-6">
                    <News />
                </div>
            </div>
            <div className="row">
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
        </div>
    )
}
