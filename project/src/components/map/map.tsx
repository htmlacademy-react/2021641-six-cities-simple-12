import {useRef, useEffect} from 'react';
// import leaflet from 'leaflet';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer, City} from '../../types/offer';
import useMap from '../../hooks/use-map/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  offers: Offer[];
  city: City;
  activeItem: number | undefined;
  className: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27,39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27,39],
});


function Map({city, offers, activeItem, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers:Marker[] = [];
    if (map) {
      map.panTo([city.location.latitude, city.location.longitude]);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeItem !== undefined && offer.id === activeItem
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

        markers.push(marker);
      });
      return () => {
        for (const marker of markers) {
          marker.removeFrom(map);
        }
      };
    }
  }, [map, offers, activeItem, city]);

  return (
    <section className={`${className} map`} ref={mapRef}></section>
  );
}

export default Map;
