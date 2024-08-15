import React from "react";

function Button({ btnClassName, btnOnClick, btnTxt }) {
    return (
        <div>
            <button type="button" className={btnClassName} onClick={btnOnClick}>{btnTxt}</button>
        </div>
    )
}

export default Button;