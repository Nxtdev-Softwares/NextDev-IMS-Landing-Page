import React from 'react';
import {useState} from 'react'
import { X } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

function ContactModal({closingFunction}) {

    // Let user to copy contact information

    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        const TexttoCopy = `E-Mail: nxtdev.info@gmail.com
PhoneNumbers: +94 77 454 7632, +94 76 055 6766
WhatsApp:  +94 77 454 7632, +94 76 055 6766`;

        setIsCopied(true);
        navigator.clipboard.writeText(TexttoCopy)
    }

    // Send user to the email
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
        <div className='contact-modal-layout-overlay'>
        <div className="contact-modal d-flex justify-content-center align-items-center">
            <X onClick={closingFunction} className='contact-modal-close-icon'/>
            <div className="d-flex justify-content-center text-center header" style={{flexDirection: "column"}}>
                <h1>Contact Us to Get Started</h1>
                <p>We’ll respond within 24 hours</p>
            </div>
            <div className="d-flex justify-content-center contact-body mt-4 gap-3" style={{flexDirection: "column"}}>
                <div className="d-flex gap-2 align-items-start">
                    <Mail className='contact-modal-icons'/>
                    <div className='contact-type'>E-Mail:</div>
                    <a href='' target='_blank' rel="noopener noreferrer" onClick={openSmartEmail} >nxtdev.info@gmail.com</a>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <Phone className='contact-modal-icons'/>
                    <div className='contact-type'>Phone:</div>
                    <div className="contact-modal-vertical-line"></div>
                    <div className="d-flex" style={{flexDirection: "column"}}>
                        <h6>+94 77 454 7632</h6>
                        <h6>+94 76 055 6766</h6>
                    </div>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <FaWhatsapp className='contact-modal-icons'/>
                    <div className='contact-type'>WhatsApp:</div>
                    <div className="contact-modal-vertical-line"></div>
                    <div className="d-flex" style={{flexDirection: "column"}}>
                        <h6>+94 77 454 7632</h6>
                        <h6>+94 76 055 6766</h6>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center contact-modal-footer pt-5">
                <button className='copy-button' onClick={handleCopy}>{isCopied ? 'Copied!' : 'Copy All'}</button>
                <button className='close-button' onClick={closingFunction}>Close</button>
            </div>
        </div>
        </div>
        </>
    );
}
export default ContactModal;
