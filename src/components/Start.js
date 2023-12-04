import React from "react"
import { useLoadScript } from "@react-google-maps/api"
import SearchForm from "./SearchForm";


function Start({ updateTruthy, setLatLng }) {
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [libraries] = React.useState(['places'])
    
    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    
    if (!isLoaded) {
        return <p>Loading...</p>
    }
    
    return (
        <div className="mt-5" style={{ border: '1px solid grey', borderRadius: '10px' }}>
            <h3 style={{ color: '#2a2a2a' }} className="m-4">Plan the Trip of a Lifetime!</h3>
            
            <SearchForm 
                updateTruthy={updateTruthy}
                location={location}
                setLocation={setLocation}
                startDate={startDate} 
                setStartDate={setStartDate} 
                endDate={endDate} 
                setEndDate={setEndDate}
                setLatLng={setLatLng}
            />
      </div>
    )
}

export default Start;