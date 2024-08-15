import React from "react";

function Image({ imgClassName, imgSrc, imgAlt }) {
    return (
        <img className={imgClassName}
            src={imgSrc}
            alt={imgAlt}
        />
    )
}

export default Image;