import { useEffect, useRef, useState } from 'react';
import { countryLocations } from '../data/countryLocations';

export const GlobeMap = ({ onReset, onRandomMove }) => {
  const globeContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const initMap = async () => {
      try {
        const { Map } = await window.google.maps.importLibrary("maps");
        const mapInstance = new Map(globeContainerRef.current, {
          center: { lat: 20, lng: 0 },
          zoom: 2,
          mapTypeId: 'terrain'
        });
        setMap(mapInstance);
        
        // Add markers for each country
        const newMarkers = countryLocations.map(location => {
          return new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: mapInstance,
            title: location.name
          });
        });
        setMarkers(newMarkers);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    if (window.google?.maps) {
      initMap();
    }
  }, []);

  return (
    <div className="map-placeholder" style={{ flex: 2 }}>
      <div className="chess-controls">
        <button 
          onClick={onReset}
          className="btn btn-primary btn-sm"
        >
          Reset Game
        </button>
        <button 
          onClick={onRandomMove}
          className="btn btn-success btn-sm"
        >
          Make Random Move
        </button>
      </div>
      <div id="globe-container" ref={globeContainerRef} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};