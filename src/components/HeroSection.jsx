import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/heroSection.css"

function HeroSection() {
    const navTo = useNavigate();
    return (
        <section className="hero" id="home">
            <video autoPlay muted loop playsInline className="hero-video">
                <source src='https://res.cloudinary.com/dmqa8d6yq/video/upload/v1762684383/home_banner_bg.mp4' type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Uncovering Truth in the Shadows</h1>
                    <h1 className="hero-title">Welcome to True Find Detective Agency</h1>
                    <p className="hero-subtitle"> Professional investigat ive services with over 20 years of experience. Discretion guaranteed, results delivered.</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary-large">Let's connect</button>
                        <button className="btn btn-secondary" onClick={() => navTo("/about")}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection