import React from 'react';

function BusinessCard(props) {
    return (
        <>
        <div className="col-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center align-items-center business-card">
            <img src={props.businessIcon} alt="" />
            <h3>{props.businessName}</h3>
        </div>
        </>
    );
}
export default BusinessCard;
