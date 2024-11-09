import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import './LeafletMap.css'; // Import your CSS file

const LeafletMap = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const mapRef = useRef(null); // To store the map instance

  // Get the user's location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });

          // Initialize the map only if it hasn't been initialized yet
          if (!mapRef.current) {
            mapRef.current = L.map("map").setView([latitude, longitude], 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapRef.current);

            // Add a simple marker at the user's location
            L.marker([latitude, longitude]).addTo(mapRef.current)
              .bindPopup("You are here!") // Simple popup message
              .openPopup();
          }
        },
        () => {
          alert("Unable to retrieve your location.");
        }
      );
    }

    // Cleanup function to remove the map on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null; // Reset the ref
      }
    };
  }, []);

  return <div id="map" className="leaflet-map" style={{ height: "400px", width: "100%" }}></div>;
};

export default LeafletMap;
