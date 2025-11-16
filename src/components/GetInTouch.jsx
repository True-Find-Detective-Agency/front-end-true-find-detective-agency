import React, { useEffect } from 'react';
import "../css/getInTouch.css";
import { useNavigate } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

function GetInTouch() {
    const navTo = useNavigate();

    // ⭐ Init AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);

    return (
        <div 
            className="get-in-touch-container"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div 
                className="marquee-layers"
                data-aos="zoom-in"
                data-aos-delay="200"
            >
                {/* Layer 1 */}
                <div className="marquee-layer layer-1">
                    <div className="marquee-content">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="marquee-item">
                                <span 
                                    className="marquee-text"
                                    onClick={() => navTo("/contact")}
                                >
                                    GET IN TOUCH
                                </span>
                                <span className="marquee-separator">★</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Layer 2 */}
                <div className="marquee-layer layer-2">
                    <div className="marquee-content reverse">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="marquee-item">
                                <span 
                                    className="marquee-text"
                                    onClick={() => window.location.href = "tel:+919977014334"}
                                >
                                    CONTACT US
                                </span>
                                <span className="marquee-separator">★</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GetInTouch;
