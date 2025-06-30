import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
// Importing the images
import NextdevLogo from '../assets/NXTDEV-Logo.png'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import ContactModal from './ContactModal';

function NavBar() {

    const isMobile = useMediaQuery({ query: '(max-width: 1060px)' });

    const requestButtonStyle = {
        gridColumn: isMobile ? "1 / -1" : '',
        width: isMobile ? "100%" : '',
        justifyContent: isMobile ? "center" : '',
    };

    // Menu button in smaller screen
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    
    // Theme toggle button
    const [isNavToggleOpen, setIsNavToggleOpen] = useState(false);

    // Changing the theme
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    // Change styles after getting scrolled
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offSet = window.scrollY;
            setScrolled(offSet > 700);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [navSectionScrolled, setNavSectionScrolled] = useState(false);

    useEffect(() => {
        const handleNavSectionScroll = () => {
            const offSet = window.scrollY;
            setNavSectionScrolled(offSet > 550);
        };

        window.addEventListener('scroll', handleNavSectionScroll);

        return () => window.removeEventListener('scroll', handleNavSectionScroll);
    }, []);

    const navLinks = (
        <div className="nav-links">
            <a href="#features">
                <div className="nav-link">Features</div>
                <div className='nav-underline'></div>
            </a>

            <a href="#howItWorks">
                <div className="nav-link">How <div className='d-none d-lg-inline d-xl-inline'>it</div> works</div>
                <div className='nav-underline'></div>
            </a>

            <a href="#about-section">
                <div className="nav-link">About</div>
                <div className='nav-underline'></div>
            </a>

            <a href="#testimonials">
                <div className="nav-link">Testimonials</div>
                <div className='nav-underline'></div>
            </a>

            <a href="#pricing">
                <div className="nav-link">Pricing</div>
                <div className='nav-underline'></div>
            </a>

            <a href="#faq">
                <div className="nav-link">FAQ</div>
                <div className='nav-underline'></div>
            </a>

            <a href="#contact">
                <div className="nav-link">Contact</div>
                <div className='nav-underline'></div>
            </a>

            <a href="#liveSession" className='live-campaing-nav-link'>
                <div className="nav-link long">Live<span className='d-inline d-md-none'>_</span><span className='d-none d-md-inline'> </span>Campaign</div>
                <div className='nav-underline'></div>
                <div className="live-icon"></div>
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview demo-button-container" target='_blank' rel="noopener noreferrer" style={requestButtonStyle}>
                <button className='request-demo-button'>Demo + 10% Lifetime Off</button>
            </a>
        </div>
    );

    return(
        <>
        <div className={`nav-bar ${scrolled ? 'nav-bar-scrolled' : ''} d-flex`}>
            <a href="" style={{textDecoration: "none"}}>
            <div className="d-flex nav-bar-logo gap-2">
                <img src={NextdevLogo} alt="CompanyLogo" />
                <div className="d-grid gap-0" style={{alignSelf: "center"}}>
                    <h3>NXTDEV</h3>
                    <h4>Inventory Management Software</h4>
                </div>
            </div>
            </a>

            <div className="nav-toggle" onClick={() => {setIsNavToggleOpen(!isNavToggleOpen); setIsMenuClicked(!isMenuClicked)}}>
                {isMenuClicked ? <X className='nav-toggle-button'/> : <Menu className='nav-toggle-button'/> }
            </div>

            <div className={` ${isNavToggleOpen ? "open" : "" } nav-section`}>
                {navLinks}
            </div>

            <div className="toggle-theme-container">
                <button className={`toggle-theme-button ${theme}`} onClick={toggleTheme} style={{transition: "0.3s"}}>
                    <span className={`toggle-track ${theme === 'light' ? "light" : "dark"}`}>
                        {theme === "light" ? <Sun className='toggle-circle sun-icon'/> : <Moon className='toggle-circle'/>}
                    </span>
                </button>
            </div>
        </div>
        </>
    );
}
export default NavBar;
