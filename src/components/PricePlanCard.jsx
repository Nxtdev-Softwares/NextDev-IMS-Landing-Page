import React from 'react';
import DefaultButton from './DefaultButton'
import { Check } from 'lucide-react';
import ContactModal from './ContactModal';
import { useState } from 'react';

function PricePlanCard({planActiveFunction, ...props}) {

    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
        <div className="pricing-plan d-flex justify-content-center align-items-center" style={{flexDirection: "column", position: "relative"}}>
          <h3>{props.plan}</h3>
          <div className="pricing-plan-body">
            <p>{props.heading}</p>
            <div className='price-container justify-content-center'><h2>{props.pricing}</h2></div>
            
            <div className="d-flex justify-content-center mt-3" style={{flexDirection: "column"}}>
                <h5>{props.includedFeatures}</h5> 
                <div className="d-flex plan-features mt-3">
                    <Check className='feature-check-mark'/> <h6>{props.feature1}</h6>
                    </div>
                    <div className="d-flex plan-features">
                    <Check className='feature-check-mark'/> <h6>{props.feature2}</h6>
                    </div>
                    <div className="d-flex plan-features">
                    <Check className='feature-check-mark'/> <h6>{props.feature3}</h6>
                    </div>
                    <div className="d-flex plan-features">
                    <Check className='feature-check-mark'/> <h6>{props.feature4}</h6>
                    </div>
                    <div className="d-flex plan-features">
                    <Check className='feature-check-mark'/> <h6>{props.feature5}</h6>
                    </div>
                    <div className="d-flex plan-features mb-4">
                    <Check className='feature-check-mark'/> <h6>{props.feature6}</h6>
                    </div>
                <div className='d-flex justify-content-center ' style={{position: "absolute", width: "100%", bottom: "38px", left: "50%", transform: "translateX(-50%)"}}>
                    <a href={props.buttonHypertext} target='_blank' rel="noopener noreferrer" className='d-flex' style={{textDecoration: "none", justifyContent: "center", width: "100%"}}>
                        <button onClick={planActiveFunction} id='pricing-buttons'>{props.buttonText}</button>
                    </a>
                </div>
            </div>
          </div>
        </div>

        {isContactModalOpen && (
            <ContactModal closingFunction={() => setIsContactModalOpen(false)}/>
        )}
        </>
    );
}
export default PricePlanCard;
