import React from 'react';
import { useState, useEffect, useRef } from 'react';
// Import the icons
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

function FaqCard({isOpen, onToggle, ...props}) {

    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;
        if (content) {
            content.style.height = isOpen ? `${content.scrollHeight}px` : '0px';
        }
    }, [isOpen]);

    return (
        <>
        <div className="FAQ-card-container">
            <div className='d-flex justify-content-center gap-2 align-items-center question-container'>
                <div className='number'>{props.number}</div>
                <h6>{props.question}</h6>
            </div>
            <button onClick={onToggle} aria-expanded={isOpen} aria-controls="collapsible-content">{isOpen ? <ChevronUp className="faq-arrow-icon"/> : <ChevronDown className="faq-arrow-icon faq-down"/>}</button>
            <div id="collapsible-content" className="collapsible-content" ref={contentRef} style={{overflow: 'hidden', transition: 'height 0.3s ease', position: "static", width: "100%"}}>
                <div className='faq-answer-underline'></div>
                <div className="inner-content mt-3">
                    <p>{props.answer}</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default FaqCard; 