import React from 'react';
import { Users } from 'lucide-react';

function SoftwareImportanceCard(props) {
    return(
        <>
        <div className="d-flex justify-content-center align-items-center software-importance-card gap-3">
            <div className="d-flex" style={{flexDirection: "column"}}>
                <div className="d-flex align-items-center gap-2">
                    {props.icon}
                    <h4>{props.heading}</h4>
                </div>
                <h6>{props.description}</h6>
            </div>
            <div className="d-flex justify-content-center" style={{flexDirection: "column"}}>
                <h4>Why it's better:</h4>
                <h6>Most systems only notify at zero — we act before you're out of stock.</h6>
            </div>
        </div>
        </>
    );
}
export default SoftwareImportanceCard;
