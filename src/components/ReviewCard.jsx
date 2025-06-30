import React from 'react';
import quotesIcons from '../assets/quotesIcon.png';

function ReviewCard(props) {
    return (
        <>
        <div className="review-card">
            <img src={props.companyLogo} alt="" className='review-company-logo'/>
                <div className="review-circle"></div>
            <div className="content">
                <img className="quotes mb-3" src={quotesIcons} alt="" style={{alignSelf: "start"}}/>
                <h4>{props.reviewMessage}</h4>
                <img className="quotes" src={quotesIcons} alt="" style={{rotate: "180deg", alignSelf: "end"}}/>
                <h6>-{props.personName}</h6>
            </div>
        </div>
        </>
    );
}
export default ReviewCard;
