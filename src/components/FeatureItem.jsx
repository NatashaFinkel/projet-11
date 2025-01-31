import React from "react";
import Image from "./Image";

function FeatureItem({ imgSrc, imgAlt, featureItemTitle, featureItemP }) {
    return (
        <div className="feature-item">
            <Image imgClassName="feature-icon" imgSrc={imgSrc} imgAlt={imgAlt} />
            <h3 className="feature-item-title">{featureItemTitle}</h3>
            <p>{featureItemP}</p>
        </div>
    );
}

export default FeatureItem;
