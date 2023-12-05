import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

function Planner(props) {
    const vacayData = props.vacayData
    
    const city =  vacayData.location;
    const imageURL = `https://source.unsplash.com/500x250/?${city}`;

    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || []);
    const days = JSON.parse(localStorage.getItem("daysObject")) || [];

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
        console.log(`Delete note at index ${index}`);

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
                            term: 'restaurant',
                            location: vacayData.location,
                        },
                    }
                );

                setPlaces(response.data.businesses);
                console.log("Yelp data: ", places);
            } catch (error) {
                console.error('Error fetching Yelp data: ', error);
            }
        };
        fetchYelpData();
    }, [vacayData.location])

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
                    {imageURL && <img style={{ width: '100%', height: 'auto', borderRadius: '15px' }} src={imageURL} alt="City" />}
                </div>

                {/* Places section (Yelp API) */}
                <div>
                    <h5>Explore</h5>
                    <p>Place</p>
                    <p>Place</p>
                    <p>Place</p>
                </div>
                <div className="border"></div>
                
                {/* Notes section */}
                <div className="mt-1">
                    <h5>Notes</h5>
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
                <div>
                    <h5>Itinerary</h5>
                    <ul className="list-group">
                        {Object.values(days).map((day,index)=> (
                            <div>
                                <li 
                                    key={index}
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
                                    <li 
                                        key={index}
                                        className={
                                            `list-group-item list-group-item-secondary d-flex justify-content-between align-items-center`
                                        }
                                    >
                                        <p className="m-0">12:00pm - go to Eiffel tower</p>
                                    </li>
                                )}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            }
        </div>
    );
}
  
export default Planner;