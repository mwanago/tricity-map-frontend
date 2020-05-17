import { useStore } from 'react-redux';
import { AppState } from '../../../store/reducers';
import { useEffect, useMemo } from 'react';
import { Marker, marker } from 'leaflet';

function useCarsMarkers() {
  const store = useStore<AppState>();
  const markers = useMemo(() => new Map<number, Marker>(), []);
  useEffect(
    () => {
      store.subscribe(
        () => {
          const action = store.getState().lastAction;
          switch (action.type) {
            case 'Cars.ReceiveList': {
              const { cars } = action.payload;
              return cars.forEach((car) => {
                markers.set(Number(car.id), (
                  marker([car.currentLocation.latitude, car.currentLocation.longitude])
                    .bindPopup(car.driverName)
                ));
              });
            }
            case 'Cars.ReceiveUpdate': {
              const { cars } = action.payload;
              return cars.forEach((car) => {
                const carMarker = markers.get(car.id);
                if (carMarker) {
                  carMarker.setLatLng([car.currentLocation.latitude, car.currentLocation.longitude]);
                }
              });
            }
            case 'Search.SetValue': {
              const cars = Object.values(store.getState().cars.entities);
              const searchValue = action.payload.value;
              markers.clear();
              cars.forEach((car) => {
                if (car.driverName.toLowerCase().includes(searchValue)) {
                  markers.set(Number(car.id), (
                    marker([car.currentLocation.latitude, car.currentLocation.longitude])
                      .bindPopup(car.driverName)
                  ));
                }
              });
            }
          }
        },
      );
    },
    [store, markers],
  );
  return {
    markers,
  };
}

export default useCarsMarkers;
