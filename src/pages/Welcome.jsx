import React, { useState, useEffect } from 'react';
import { Shield, Eye, Search, ArrowRight } from 'lucide-react';

import "../css/welcome.css"

function Welcome({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    // Auto-dismiss after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            handleContinue();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleContinue = () => {
        setFadeOut(true);
        setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 800);
    };

    if (!isVisible) return null;

    return (
        <>
            <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}>
                <div className="welcome-content">
                    {/* Animated Icons */}
                    <div className="animated-icons">
                        <div className="icon-wrapper icon-1">
                            <Shield size={50} />
                        </div>
                        <div className="icon-wrapper icon-2">
                            <Eye size={50} />
                        </div>
                        <div className="icon-wrapper icon-3">
                            <Search size={50} />
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="welcome-logo">
                        <img src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763137904/unnamed_1_mfjcmk.png" alt="" />
                    </div>

                    {/* Text Content */}
      
                    <p className="welcome-tagline">Uncovering Truth in the Shadows</p>

                    {/* Loading Bar */}
                    <div className="loading-bar">
                        <div className="loading-progress"></div>
                    </div>

                    {/* Continue Button */}
                    <button className="continue-btn" onClick={handleContinue}>
                        Enter Site <ArrowRight size={20} />
                    </button>

                    <p className="welcome-note">
                        Professional Investigative Services Since 2005
                    </p>
                </div>

                {/* Background Effects */}
                <div className="bg-circles">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                </div>
            </div>

        </>
    );
}

export default Welcome;