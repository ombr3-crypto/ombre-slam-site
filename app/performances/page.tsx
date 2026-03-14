"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function Performances(){

return(

<div style={{height:"100vh"}}>

<MapContainer
center={[20,0]}
zoom={2}
style={{height:"100%", width:"100%"}}
>

<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<Marker position={[45.5,-73.5]}>
<Popup>Montréal — Festival Slam</Popup>
</Marker>

<Marker position={[13.5,2.1]}>
<Popup>Niger — Performance Poésie</Popup>
</Marker>

</MapContainer>

</div>

)

}