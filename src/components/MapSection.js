import React from "react"
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function MapSection({ latLng }) {
    
    const positionTest = latLng
    
    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>            
            <div style={{ height: '82vh', width: '100%'}}>
                <Map
                zoom={13}
                center={ positionTest }
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                />
            </div>
        </APIProvider>
    )
}
  
export default MapSection;