import React from 'react';

function ContactCard(props) {
    return (
        <>
        <div className="col-6 col-md-4 col-lg-3 col-xl-3 contact-info-card">
            {props.contactIcon}
            <div className="contact-content">
                <div className="header-section d-flex justify-content-start align-items-center mt-5" style={{width: "100%", flexDirection: "column", height: "150px"}}>
                    <h6>{props.contactMethod}</h6>
                    <div className='contact-info-underline'></div>
                </div>
                <div className="contact-detail">
                    <h5>{props.contactValue1}</h5>
                    <h5>{props.contactValue2}</h5>
                </div>
            </div>
        </div>
        </>
    );
}
export default ContactCard;
