import 'leaflet.markercluster';
import { useLeaflet } from 'react-leaflet';
import useCarsMarkers from './useCarsMarkers';
import useCarsListManagement from '../../List/useListManagement';
import { useEffect, useMemo } from 'react';

const markerClusterGroup = window.L.markerClusterGroup;

function useCluster() {
  const { map } = useLeaflet();
  const { markers } = useCarsMarkers();
  const { isLoading } = useCarsListManagement();

  const group = useMemo(
    () => (
      markerClusterGroup({
        chunkedLoading: true,
        chunkInterval: 100,
        animate: false,
        animateAddingMarkers: false,
      })
    ),
    [],
  );

  useEffect(
    () => {
      if (map && !isLoading) {
        group.clearLayers();
        markers.forEach((marker) => {
          marker.addTo(group);
        });
        map.addLayer(group);
      }
    },
    [map, markers, isLoading, group, markers.size],
  );
}

export default useCluster;
