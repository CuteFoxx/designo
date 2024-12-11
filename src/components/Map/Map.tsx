import "./map.scss"
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, TileLayer} from 'react-leaflet'

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