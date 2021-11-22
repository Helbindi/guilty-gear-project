import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaSteam, FaPlaystation} from 'react-icons/fa';
import './Footer.css';
import icon from '../assets/images/gg-icon.ico';

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-content">
                <ul className='icon-container'>
                    <div className='items-header'>
                        <h3>Social Media</h3>
                        <div className="underline"></div>
                    </div>
                    <a href="https://www.guiltygear.com/ggst/en/" target="_blank" rel="noopener noreferrer"> 
                        <img src={icon} alt='logo' className='icon-style' /> </a>
                    <a href="https://twitter.com/ArcSystemWorksU" target="_blank" rel="noopener noreferrer"> 
                        <FaTwitter  className='icon-style'/> </a>
                    <a href="https://www.facebook.com/arcsystemworksu/" target="_blank" rel="noopener noreferrer"> 
                        <FaFacebook  className='icon-style'/> </a>
                    <a href="https://www.youtube.com/channel/UClqUSY9SshvuFja6yNXp4nQ" target="_blank" rel="noopener noreferrer"> 
                        <FaYoutube  className='icon-style'/> </a>
                </ul>

                <h3>All content are property of Arc System Works and partnering publishers.</h3>

                <ul className='icon-container'>
                    <div className='items-header'>
                        <h3>Store</h3>
                        <div className="underline"></div>
                    </div>
                    <a href="https://store.steampowered.com/app/1384160/GUILTY_GEAR_STRIVE/" target="_blank" rel="noopener noreferrer"> 
                        <FaSteam  className='icon-style'/> </a>
                    <a href="https://store.playstation.com/en-us/product/UP0036-PPSA02181_00-GGSTPS5US0000100" target="_blank" rel="noopener noreferrer"> 
                        <FaPlaystation  className='icon-style'/> </a>
                </ul>
            </div>
        </div>
    )
}

export default Footer
