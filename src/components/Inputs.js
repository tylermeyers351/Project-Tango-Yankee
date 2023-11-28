import React from 'react'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { Combobox } from '@headlessui/react';

export default function Inputs() {
    
    return (
        <>
            <PlacesAutocomplete />
        </>
    )
}

function PlacesAutocomplete() {
    
    
    
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete()
    
    return (
        <Combobox>
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