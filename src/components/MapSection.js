import React from "react"
import {APIProvider, Map} from '@vis.gl/react-google-maps';

function MapSection(props) {
    const position = { lat: 34.1753152, lng: -118.9087979 }
    
    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>            
            <div style={{ height: '100vh', width: '100%'}}>
                <Map
                zoom={9}
                center={ position }
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                />
            </div>
        </APIProvider>
    )
}
  
export default MapSection;