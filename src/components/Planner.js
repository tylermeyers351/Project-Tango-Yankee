import React from "react";
import axios from 'axios';

function Planner(props) {
    const vacayData = props.vacayData
    
    const city =  vacayData.location;
    const imageURL = `https://source.unsplash.com/500x250/?${city}`;

    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || []);

    // Notes
    const handleNoteSubmit = (e) => {
        const inputElement = document.getElementById('note');
        const newNote = inputElement.value;

        setNotes((prevNotes) => {
            const updatedNotes = [...prevNotes, newNote];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });
        
        localStorage.setItem("notes",  JSON.stringify([...notes, newNote]))
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}-${day}`;
      };

    return (
        <div className="m-3">
            {vacayData && 
            <div>
                <div className="image-box">
                    <div className="top-left">
                        <h4 className="mt-2">Trip to {vacayData.location}</h4>
                        <p>From {formatDate(vacayData.startDate)} to {formatDate(vacayData.endDate)}</p>
                    </div>
                    {imageURL && <img style={{ width: '100%', height: 'auto', borderRadius: '15px' }} src={imageURL} alt="City" />}
                </div>

                <div>
                    <h5>Explore</h5>
                    <p>Place</p>
                    <p>Place</p>
                    <p>Place</p>
                </div>
                <div>
                    <h5>Notes</h5>
                    
                    {/* Notes */}
                    <div>
                        <input 
                            autoComplete="off"
                            type="text"
                            id="note"
                            placeholder="Enter note here..." 
                        />
                        <button onClick={handleNoteSubmit}>Submit</button>
                    </div>
                </div>
                <div>
                    <h5>Itinerary</h5>
                    <p>Day</p>
                    <p>Day</p>
                    <p>Day</p>
                </div>
            </div>
            }
        </div>
    );
}
  
export default Planner;