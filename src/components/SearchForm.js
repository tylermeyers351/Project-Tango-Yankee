import React from 'react'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { Combobox } from '@headlessui/react';

export default function SearchForm({ updateTruthy, location, setLocation, startDate, setStartDate, endDate, setEndDate, setLatLng }) {
    
    const [error, setError] = React.useState('')
    
    function handleSubmit(event) {
        event.preventDefault()
        
        if (!location.trim()) {
            setError("Location cannot be empty.");
            return;
        };

        if (!startDate || !endDate) {
            setError("Please select start and end dates.");
            return;
        };

        const startDateObject = new Date(startDate);
        const endDateObject = new Date(endDate);

        if (startDateObject >= endDateObject) {
            setError("Please use valid dates.")
            return
        };

    // TM Edit 11/28 ----------------------------------------------------------
      
    // Calculate the difference in milliseconds then convert to days
    const timeDifference = endDateObject.getTime() - startDateObject.getTime();
    const milisecondsToDays = (1000 * 60 * 60 * 24);
    const daysDifference = timeDifference / milisecondsToDays;

    console.log("Number of days between the two dates:", daysDifference);
    
    let currentDate = startDateObject

    let daysObject = {}

    // Loop through each date, and add to daysObject
    for (let i = 0; i <= daysDifference; i++) {
    daysObject[i] = currentDate.toDateString()
    currentDate.setDate(currentDate.getDate() + 1);
    }

    localStorage.setItem("daysObject", JSON.stringify(daysObject));

    // This is the object that I want to end up with
    const daysData = {
    0: {'11/28': {}},
    1: {'11/29': {}},
    2: {'11/30': {}}
    }
    // End TM Edit on 11/28 ---------------------------------------------------

        const vacationData = {
            startDate: startDate,
            endDate: endDate,
            location: location,
        };
        
        console.log(vacationData)
        
        setError("");

        localStorage.setItem("localData", JSON.stringify(vacationData));

        updateTruthy()
    }
    
    return (
        <form onSubmit={handleSubmit}>
        
            {/* Location Selection defined below */}
            <PlacesAutocomplete setLocation={setLocation} setLatLng={setLatLng}/>
            
            {/* Date Selection */}
            <div className="row m-3">
                <div className="col">
                    <label htmlFor="startDate">Start Date:&nbsp;</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(event) => { setStartDate(event.target.value) }}
                        
                    />
                </div>
                <div className="col">
                    <label htmlFor="endDate">End Date:&nbsp;</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(event) => { setEndDate(event.target.value) }}
                        
                    />
                </div>
            </div>
            
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="d-grid m-4 p-1">
                <button 
                    style={{ color: 'white', backgroundColor: '#F5793B', fontWeight: 'bold', border: 'none' }} 
                    className="btn" 
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

function PlacesAutocomplete({ setLocation, setLatLng }) {
    
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete()
    
    async function handleSelect(address) {
        setValue(address, false)
        setLocation(address)
        clearSuggestions()
        
        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])
        setLatLng({
            lat,
            lng
        })
    }
    
    return (
        <Combobox onChange={handleSelect}>
            <Combobox.Input 
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder='Where to?'
                disabled={!ready}
            />
            <Combobox.Options>
                {status === 'OK' && 
                    data.map(({ place_id, description }) => (
                        <Combobox.Option key={place_id} value={description}>{description}</Combobox.Option>
                    ))
                }
            </Combobox.Options>
        </Combobox>
    )
}