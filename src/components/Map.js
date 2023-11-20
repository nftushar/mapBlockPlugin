import React, { useState, useEffect } from 'react';

const Map = ({ attributes, setAttributes }) => {
    const { apiKey, mapLocation, zoom, filters } = attributes;

    // Construct the filter style string
   

    return (
        <div className="mapContainer">
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
