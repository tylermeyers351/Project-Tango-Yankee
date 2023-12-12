import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus, faMapPin } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {v4 as uuidv4} from 'uuid';

function Planner(props) {
    const vacayData = props.vacayData
    
    const city =  vacayData.location;
    const imageURL = `https://source.unsplash.com/500x250/?${city}`;

    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || []);
    const days = JSON.parse(localStorage.getItem("daysObject")) || [];

    const handleNewTripSubmit = () => {
        props.updateTruthy();
        localStorage.clear();
    };

    const handleNoteSubmit = (e) => {
        e.preventDefault();
        const inputElement = document.getElementById('note');
        const newNote = inputElement.value.trim();

        if (newNote !== "") {
            setNotes((prevNotes) => {
                const updatedNotes = [newNote, ...prevNotes];
                localStorage.setItem("notes", JSON.stringify(updatedNotes));
                return updatedNotes;
            });
            
            inputElement.value = "";
        }
    };

    const handleDeleteNote = (index) => {
        setNotes((prevNotes) => {
            let newNotes = []
            for (let i = 0; i < prevNotes.length; i++) {
                if (i !== index) {
                    newNotes.push(prevNotes[i])
                }
            }
            localStorage.setItem("notes", JSON.stringify(newNotes));
            return newNotes;
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}-${day}`;
    };

    // Logic for expanding itinerary
    const [expandedItems, setExpandedItems] = React.useState({});

    const toggleExpand = (index) => {
        console.log("Itinerary item clicked at #", index)
        setExpandedItems((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));

        if (expandedItems[index]) {
            console.log("THING", JSON.parse(localStorage.getItem(index)))
        }
    };

    // Yelp API

    const [places, setPlaces] = React.useState([]);

    React.useEffect(() => {
        const fetchYelpData = async () => {
            try {
                const apiUrl = 'https://api.yelp.com/v3/businesses/search';
                const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // CORS Anywhere proxy

                const response = await axios.get(
                    `${proxyUrl}${apiUrl}`, {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
                        },
                        params: {
                            location: vacayData.location,
                        },
                    }
                );
                // Random number generation so it will randomly slice from the 20 results that come from the API
                let randNum = Math.floor(Math.random() * 17);
                setPlaces(response.data.businesses.slice(randNum, randNum + 3));
            } catch (error) {
                console.error('Error fetching Yelp data: ', error);
            }
        };
        fetchYelpData();
    }, [vacayData.location, setPlaces])

    React.useEffect(() => {
        console.log("Yelp data: ", places);
    }, [places]);

    const getStarImage = (rating) => {
        if (rating % 1 === 0) {
            return `${process.env.PUBLIC_URL}/review_stars/small_${rating}@3x.png`;
        } else {
            rating = rating - 0.5
            return `${process.env.PUBLIC_URL}/review_stars/small_${rating}_half@3x.png`;
        }
    }

    // Commented code below for google place api to fetch an image for image box
    // const [photoReference, setPhotoReference] = React.useState('');

    // React.useEffect(() => {
    //     const placeId = JSON.parse(localStorage.getItem("place_id"))
    //     // const placeId = "ChIJJxjVrDOGwoARSNYFc-CPSlY"
    //     // photoReference = 'AWU5eFicq2AlXmbQPeS7ksameKZXCng6zr_u86im40lEO8n1atZ0QhHz9auztvA23bdV_ysTF5WgjOnjRPyR6jkRzOKC0KV2Q9YbieScX3kX1EBnsEqdxxM_N29UaxwqneJ1GfdKpT3LF7pAMl-w-z90pIzJpAhVzrK9sZ8cZXejD_ZnIvZ3'
        
    //     const fetchPlaceDetails = async () => {
    //         try {
    //         // Use the CORS proxy before the Google Places API URL
    //         const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //         const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photo&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

    //         const response = await fetch(`${corsProxyUrl}${googleApiUrl}`);
    //         const data = await response.json();
        
    //         // Log the result to the console
    //         let randIndex = Math.floor(Math.random() * 10);
    //         let newPhotoReference = data.result.photos[randIndex].photo_reference;
    //         setPhotoReference(newPhotoReference)
    //         } catch (error) {
    //         console.error('Error fetching place details:', error);
    //         }
    //     };
        
    //     fetchPlaceDetails();
    // }, []);

    const [textAreas, setTextAreas] = React.useState(JSON.parse(localStorage.getItem("textAreas")) || [])

    function handleTextareaChange(index, event) {
        const newText = event.target.value;
        console.log(`Textarea at index ${index} changed. New value: ${newText}`);
        const newTextAreas = [...textAreas];

        newTextAreas[index] = newText;
        
        setTextAreas(newTextAreas);
        localStorage.setItem("textAreas", JSON.stringify(newTextAreas))
    }


    return (
        <div className="m-3">
            {vacayData && 
            <div>

                {/* Image and trip overview box */}
                <div className="image-box">
                    <div className="top-left">
                        <h4 className="mt-2">Trip to {vacayData.location}</h4>
                        <p>From {formatDate(vacayData.startDate)} to {formatDate(vacayData.endDate)}</p>
                    </div> 
                    <img 
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
                        // src={`https://maps.googleapis.com/maps/api/place/photo?maxheight=10000&photoreference=${photoReference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} 
                        src={imageURL}
                        alt="City"
                    />
                </div>

                <br></br>
                <div className="border"></div>

                {/* Places section (Yelp API) */}
                <div className="mt-1">
                    <h4>Explore</h4>
                    <div className="card-group">
                        {places.map((place) => {
                            return(
                                <div key={place.id} className="card">
                                    <div className="card-img-top-container">
                                        <a href={place.url}>
                                            <img src={place.image_url} className="card-img-top" alt="Restaurant"/>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{place.name}</h5>
                                        <p className="m-0 card-text">
                                            <img 
                                                src={getStarImage(place.rating)}
                                                style={{width: "46%"}}
                                                alt="Stars"
                                            /> 
                                            <b className="mt-1 pt-1">&nbsp;{place.rating.toFixed(1)}</b><br></br>
                                            <small className="card-text">
                                                {place.review_count.toLocaleString()} reviews
                                            </small>
                                        </p>
                                        <p className="bold-p m-0">
                                            {place.categories.map((category, index)=> (
                                                <small key={uuidv4()}>
                                                    {index !== 0 ? '\u00A0\u2022\u00A0' : ""}{category.title}
                                                </small>
                                            ))}
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">
                                            <FontAwesomeIcon icon={faMapPin} />
                                            &nbsp;{place.location.city} &bull; {place.price}
                                        </small>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <br></br>
                <div className="border"></div>
                
                {/* Notes section */}
                <div className="mt-1">
                    <h4>Notes</h4>
                    <form onSubmit={handleNoteSubmit}>
                        <ul className="list-group">
                            <input 
                                className="list-group-item list-group-item-warning"
                                autoComplete="off"
                                type="text"
                                id="note"   
                                placeholder="Enter note here..." 
                            />
                        </ul>
                    </form>
                    <ul className="list-group">
                        {notes.map((note,index)=> (
                            <li 
                                key={index}
                                className="list-group-item list-group-item-warning d-flex justify-content-between align-items-center">
                                {note}
                                <div onClick={() => handleDeleteNote(index)}>
                                    <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <br></br>
                <div className="border"></div>
                
                {/* Itinerary Section */}
                <div className="mt-1">
                    <h4>Itinerary</h4>
                    <ul className="list-group">
                        {Object.entries(days).map(([id, day],index)=> (
                            <div key={`DIV_Key-${id}`}>
                                <li 
                                    key={`Header-${id}`}
                                    className={
                                        `list-group-item list-group-item-light d-flex justify-content-between align-items-center 
                                        ${expandedItems[index] ? 'expanded' : ''}`
                                        }
                                    onClick={() => toggleExpand(index)}
                                >
                                    {day}
                                    <div>
                                        <FontAwesomeIcon icon={expandedItems[index] ? faMinus : faPlus} />
                                    </div>
                                    
                                </li>
                                {expandedItems[index] && (
                                    <textarea
                                        id={`text-area-${index}`}
                                        className="form-control list-group-item list-group-item-secondary"
                                        rows="4"
                                        type="text" 
                                        name="itinerary_notes"
                                        placeholder="Where to?"
                                        onChange={(event) => handleTextareaChange(index, event)}
                                        value={textAreas[index]}
                                        // value={JSON.parse(localStorage.getItem(`${index}`))}
                                    />
                                )}
                            </div>
                        ))}
                    </ul>
                    <button
                        className="mt-3 btn" 
                        style={{color: 'white', backgroundColor: '#F5793B', fontWeight: 'bold', border: 'none', width: '100%'}} 
                        onClick={handleNewTripSubmit} 
                        type="button"
                    >
                        New Trip!
                    </button>
                </div>

            </div>
            }
        </div>
    );
}
  
export default Planner;