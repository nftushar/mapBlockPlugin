import React from 'react';

const Map = ({ attributes, }) => {
    const { apiKey, mapLocation, zoom } = attributes;

    return (
        <div className="mapContainer">
            <div className="custom-embed">
                <iframe
                    id="mapFrame"
                    loading="lazy"
                    title="Dhaka, Bangladesh"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(mapLocation)}&key=${apiKey}&t=m&z=${zoom}&output=embed&iwloc=near`}
                />
            </div>
        </div>
    );
};

export default Map;
