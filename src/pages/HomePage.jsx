import React from "react";
import FeatureItem from "../components/FeatureItem";
import iconChatImg from "../img/icon-chat.png";

function HomePage() {
    return (
        <div>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>

            <section className="features">
                <h2 className="sr-only">Features</h2>

                <FeatureItem imgSrc={iconChatImg} imgAlt="Chat Icon" featureItemTitle="You are our #1 priority" featureItemP=" Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />

            </section>
        </div>
    )
}

export default HomePage;