import React from "react";
import axios from 'axios';

function Planner(props) {
    const vacayData = props.vacayData

    const [city, setCity] = React.useState('');
    const [imageURL, setImageURL] = React.useState('https://picsum.photos/600/200');

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        const imageURL = 'https://picsum.photos/200/300';
        setImageURL(imageURL);
    };

    return (
        <div className="m-3">
            {vacayData && 
            <div>
                <div>
                    <h3>Trip to {vacayData.location}</h3>
                    <p>From {vacayData.startDate} to {vacayData.endDate}</p>
                    {imageURL && <img style={{ width: '100%' }} src={imageURL} alt="City" />}
                </div>

                <div>
                    <h5>Explore</h5>
                    <p>Place</p>
                    <p>Place</p>
                    <p>Place</p>
                </div>
                <div>
                    <h5>Notes</h5>
                    <p>Note</p>
                    <p>Note</p>
                    <p>Note</p>
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