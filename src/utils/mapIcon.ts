import Leaflet from 'leaflet';

import mapMarkerImg from '../images/Local.svg'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,  
    iconSize: [44, 51],
    iconAnchor: [22, 51],
    popupAnchor: [170, 10]
  })

export default mapIcon;