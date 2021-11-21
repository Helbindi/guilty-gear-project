import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaFacebook, FaTwitter, FaYoutube, FaGamepad, FaSteam, FaChevronDown } from 'react-icons/fa';
import { CharacterList } from '../data/CharacterList';
import './Navbar.css';
import logo from '../assets/images/gglogo.svg';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const iconStyle = { color: "white", fontSize: "1em", margin: ".5em"};

    useEffect(() => {
        if(!linksRef.current) return;
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <nav>
            <div className="navbar-center">
                <div className="navbar-header">
                    <a href="/">
                        <img src={logo} className="logo" alt="logo"/>
                    </a>
                    <button className="navbar-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>

                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/About">About</a>
                        </li>
                        <li>
                            <div class="dropdown">
                                <a class="btn-drop">Characters <FaChevronDown className='dropdown-icon'/></a>
                                <div class="dropdown-content">
                                    {CharacterList.map((character) => {
                                        return (
                                            <a href={`/${character.name}`}>
                                                <div className="dropdown-link">
                                                    <img src={character.imageURL} alt="" className="dropdown-img"/>
                                                    {character.name}
                                                </div>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <ul className='social-icons'>
                    <a href="https://www.guiltygear.com/ggst/en/" target="_blank" rel="noopener noreferrer"> 
                        <FaGamepad style={iconStyle}/> </a>
                    <a href="https://twitter.com/ArcSystemWorksU" target="_blank" rel="noopener noreferrer"> 
                        <FaTwitter  style={iconStyle}/> </a>
                    <a href="https://www.facebook.com/arcsystemworksu/" target="_blank" rel="noopener noreferrer"> 
                        <FaFacebook  style={iconStyle}/> </a>
                    <a href="https://www.youtube.com/channel/UClqUSY9SshvuFja6yNXp4nQ" target="_blank" rel="noopener noreferrer"> 
                        <FaYoutube  style={iconStyle}/> </a>
                    <a href="https://store.steampowered.com/app/1384160/GUILTY_GEAR_STRIVE/" target="_blank" rel="noopener noreferrer"> 
                        <FaSteam  style={iconStyle}/> </a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
