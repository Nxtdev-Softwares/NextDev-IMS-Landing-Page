import React from 'react';

function FeatureCards(props) {
    return (
        <>
        <div className="col-6 col-md-4 col-lg-4 col-xl-4 mb-3">
            <div className="main-features-card">
                <div className="main-featurecard-icon-row d-flex justify-content-start align-items-center">
                    {props.icon}
                    <h4>{props.featureText}</h4>
                </div>
                <div className="main-feature-card-content text-start mt-1">
                    <h6>{props.description}</h6>
                </div>
            </div>
        </div>
        </>
    );
}
export default FeatureCards;
