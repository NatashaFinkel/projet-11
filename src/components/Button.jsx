import React from "react";

function Button({ btnClassName, btnOnClick, btnTxt, btnDisabled }) {
    return (
        <div>
            <button
                type="button"
                className={btnClassName}
                onClick={btnOnClick}
                disabled={btnDisabled}
            >
                {btnTxt}
            </button>
        </div>
    );
}

export default Button;