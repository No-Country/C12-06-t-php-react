import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { v4 } from "uuid";

mapboxgl.accessToken =
  "pk.eyJ1IjoiemV2YWd1aWxsbyIsImEiOiJjbDZ3b2p0N3ExNWNuM25wNXZudnducm9mIn0.x85rW5VZ8z0q3U5-mO3NVA";

const defaultCenter = {
  lat: -34.61315,
  lng: -58.37723,
  zoom: 8,
};

// const defaultMarker = [
//   {
//     lat: 10.99835602,
//     lng: 77.01502627,
//   }
// ]

export default function GMap({ center = defaultCenter, markersList, className="" }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markers = useRef({});
  const elemRef = React.useRef(null);

  useEffect(() => {
    if (map.current) return;

    // set mapbox
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [defaultCenter.lng, defaultCenter.lat],
      zoom: defaultCenter.zoom,
    });

    if (markersList.length > 0) {
      markersList.forEach(markerItem => {
        const { lng, lat } = markerItem;

        const marker = new mapboxgl.Marker();

        marker.id = v4();

        marker.setLngLat([lng, lat]).addTo(map.current);

        markers.current[marker.id] = marker;
      });
    }
  },[]);

  return (
    <div
      ref={mapContainer}
      className={"overflow-hidden " + className}>
    </div>
  );
}
