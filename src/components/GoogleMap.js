import React, { useRef, useEffect } from 'react';

const GoogleMap = ({ position }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: position,
      zoom: 13,
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    new window.google.maps.Marker({
      position,
      map,
    });
  }, [position]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default GoogleMap;
