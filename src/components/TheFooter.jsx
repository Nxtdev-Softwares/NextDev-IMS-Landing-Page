import React from 'react';
import twitterLogo from '../assets/twitterLogo.svg'
import instagramLogo from '../assets/instagramLogo.svg'
import threadsLogo from '../assets/threadsLogo.png'
import facebookLogo from '../assets/facebookLogo.png'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

function TheFooter() {

    const openSmartEmail = () => {
        const email = "nxtdev.info@gmail.com";
        const subject = encodeURIComponent("Hello!");
        const body = encodeURIComponent("I am ready for a demo...");

        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
        const win = window.open(gmailUrl, "_blank");

        if (!win || win.closed || typeof win.closed === "undefined") {
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }
    };

    return (
        <>
        <div className='footer'>
            <div className="row d-flex align-items-start" style={{justifyContent: "space-betweeen", maxWidth: "1000px", width: "90%", height: "100%"}}>
                <div className="col-6 col-md-4 col-lg-3 footer-link-container quick-links">
                    <h3>Quick Links</h3>
                    <div className="d-flex justify-content-center align-items-start" style={{flexDirection: "column"}}>
                        <a href="">Home</a>
                        <a href="#features">Features</a>
                        <a href="#howItWorks">How It Works</a>
                        <a href="#about-section">About</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact</a>
                        <a href="#liveSession">Join the Live Session</a>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-6 footer-link-container align-items-center contacting-container">
                    <h3>Contact</h3>
                    <div className="d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                        <a target='_blank' rel="noopener noreferrer" onClick={openSmartEmail} className='d-flex gap-2 justify-content-center' style={{cursor: "pointer"}}> 
                            <Mail className='footer-contact-icon'/>
                            <div className='footer-contact-info'>nxtdev.info@gmail.com</div>
                        </a>
                        <div className="d-flex align-items-center gap-2 mt-2">
                            <Phone className='footer-contact-icon'/>
                            <div className="d-flex justify-content-center footer-numbers-container">
                                <div className='footer-contact-info'>+94 76 055 6766</div>
                                <div className="phone-vertical-line"></div>
                                <div className='footer-contact-info'>+94 77 454 7632</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 footer-link-container align-items-end social-medias-footer-container">
                    <h3>Follow Us</h3>
                    <div className="d-flex justify-content-center align-items-start" style={{flexDirection: "column"}}>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/nxtdev_software_company/" className='social-media-link-container'>
                            <img src={instagramLogo} alt="" className='social-media-images'/>
                            <div className="social-media-tooltips">Instagram</div>
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://x.com/NXTDEVSC" className='mt-2 social-media-link-container'>
                            <img src={twitterLogo} alt="" className='social-media-images'/>
                            <div className="social-media-tooltips">X/Twitter</div>
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.threads.com/@nxtdev_software_company" className='mt-2 social-media-link-container'>
                            <img src={threadsLogo} alt="" className='social-media-images'/>
                            <div className="social-media-tooltips">Threads</div>
                        </a>
                        <a target='_blank' rel="noopener noreferrer" href="https://web.facebook.com/profile.php?id=61577332290782" className='mt-2 social-media-link-container'>
                            <img src={facebookLogo} alt="" className='social-media-images'/>
                            <div className="social-media-tooltips">Facebook</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center text-center footer-discount-cta-container">
                <h3>🟦 Don’t miss our free live demo!</h3>
                <h6>🎁 Lifetime discount included.</h6>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNIK2IsyjLQaHrRp8pi7doQjuZvew8y8iPaOrlNN3pIwQSFQ/viewform?usp=preview demo-button-container" target='_blank' rel="noopener noreferrer" style={{margin: "0 auto", maxWidth: "400px", display: "flex", justifyContent: "center"}}>
                    <button className='request-demo-button'>Demo + 10% Lifetime Off</button>
                </a>
            </div>
            <div className="d-flex justify-content-center copyright-container">
                <h3>© 2025 Nxtdev Software Company. All Rights Reserved.</h3>
            </div>
        </div>
        </>
    );
}
export default TheFooter;



