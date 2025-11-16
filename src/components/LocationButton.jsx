import React from "react";

function LocationButton({ lat = 23.2056, lng = 77.0937 }) {
  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <button className="btn btn-primary" onClick={openGoogleMaps}>
      Show Directions
    </button>
  );
}

export default LocationButton;
