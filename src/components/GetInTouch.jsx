import React from 'react'
import "../css/getInTouch.css"
import { useNavigate } from 'react-router-dom';

function GetInTouch() {
    const navTo = useNavigate();

    return (
        <div className="get-in-touch-container">
            <div className="marquee-layers">
                {/* First Layer - Moving Right to Left */}
                <div className="marquee-layer layer-1">
                    <div className="marquee-content">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="marquee-item">
                                <span className="marquee-text" onClick={() => navTo("/contact")}>GET IN TOUCH</span>
                                <span className="marquee-separator" >★</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Layer - Moving Left to Right */}
                <div className="marquee-layer layer-2">
                    <div className="marquee-content reverse">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="marquee-item">
                                <span className="marquee-text" onClick={() => navTo("/contact")}>CONTACT US</span>
                                <span className="marquee-separator">★</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GetInTouch