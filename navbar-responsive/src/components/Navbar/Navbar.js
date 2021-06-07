import React, { useEffect, useRef, useState } from 'react';
import logo from '../../logo.svg';
import { FaBars } from 'react-icons/fa';
import {links, social} from '../../data';
import Links from './Links';
import SocialIcon from './SocialIcon';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }else{
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="logo" alt="logo"/>
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars/>
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <Links links={links} linksRef={linksRef}/>
                </div>
                <SocialIcon social={social}/>
            </div>
        </nav>
    );
};

export default Navbar;
