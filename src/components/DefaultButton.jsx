import React from 'react';

function DefaultButton(props) {
    return (
        <>
        <a href={props.buttonPath}>
            <button className="default-button">{props.text}</button>
        </a>
        </>
    );
}
export default DefaultButton;
