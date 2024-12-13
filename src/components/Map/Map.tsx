import "./map.scss"
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, TileLayer} from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

type mapProps = {
    x: number,
    y: number,
    zoom?: number
}

const Map = ({x, y, zoom = 14}: mapProps) => {
    return (
        <MapContainer className={'map'} center={[x, y]} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[x, y]}>
            </Marker>
        </MapContainer>
    );
};

export default Map;