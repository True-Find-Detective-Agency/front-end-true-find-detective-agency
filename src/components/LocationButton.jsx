import React from "react";

function LocationButton({ lat = 23.2056, lng = 77.0937 }) {
  const handleClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <button className="btn btn-secondary" onClick={handleClick}>
      Show Directions
    </button>
  );
}

export default LocationButton;
