import React, { useState, useEffect } from 'react'; 

const Map = ({ attributes, setAttributes }) => {
    const { apiKey, mapLocation, zoom } = attributes;
 
    return (
        <div className="mapContainer">
            <label htmlFor="locationInput">Enter Location or Coordinates (latitude, longitude):</label>
            <input type="text" id="locationInput" placeholder="e.g., Dinajpur Pulhat Jame Masjid or 25.6234, 88.6258" />

            <label htmlFor="apiKeyInput">Enter Google Maps API Key:</label>
            <input type="text" id="apiKeyInput" value={apiKey} onChange={(e) => setAttributes({ apiKey: e.target.value })} />

            {/* <button id="showMapBtn" onClick={handleUpdateMap}>
                Show on Map
            </button> */} 

            <div className="custom-embed">
                <iframe id="mapFrame" loading="lazy" title="Dhaka, Bangladesh" src={`https://maps.google.com/maps?q=${encodeURIComponent(mapLocation)}&key=${apiKey}&t=m&z=${zoom}&output=embed&iwloc=near`}></iframe>
            </div>
        </div>
    );
};

export default Map;
