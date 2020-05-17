import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import styles from './styles.module.scss';

const Map = () => {
  return (
    <LeafletMap
      className={styles.map}
      center={[
        process.env.REACT_APP_MAP_CENTER_LATITUDE,
        process.env.REACT_APP_MAP_CENTER_LONGITUDE,
      ]}
      zoom={13}
      preferCanvas={true}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
    </LeafletMap>
  );
};

export default Map;
