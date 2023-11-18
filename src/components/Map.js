import React, { useState, useEffect } from 'react';

const Map = ({ attributes, setAttributes }) => {
    const { apiKey, mapLocation, zoom, filters } = attributes;

    // Construct the filter style string
    const filterStyle = filters
        ? `filter: blur(${filters.blur}px) brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturate}%) hue-rotate(${filters.hue}deg);`
        : '';

    return (
        <div className="mapContainer">
            <label htmlFor="locationInput">Enter Location or Coordinates (latitude, longitude):</label>
            <input type="text" id="locationInput" placeholder="e.g., Dhaka, Bangladesh or 25.6234, 88.6258" />

            <label htmlFor="apiKeyInput">Enter Google Maps API Key:</label>
            <input type="text" id="apiKeyInput" value={apiKey} onChange={(e) => setAttributes({ apiKey: e.target.value })} />

            <div className="custom-embed">
                <iframe
                    id="mapFrame"
                    loading="lazy"
                    title="Dhaka, Bangladesh"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(mapLocation)}&key=${apiKey}&t=m&z=${zoom}&output=embed&iwloc=near`}
                    style={{ width: '100%', height: '100%', border: '0', ...filters }}
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
