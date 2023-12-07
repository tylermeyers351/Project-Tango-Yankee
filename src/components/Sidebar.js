import React from "react"

function Sidebar(props) {
    const handleNewTripSubmit = () => {
        props.updateTruthy()
        localStorage.removeItem("localData");
        localStorage.removeItem("notes");
        localStorage.removeItem("coordinates");
      };

    return (
        <div className="m-4">
            <div>
                <h5>Overview</h5>
                <p>Explore</p>
                <p>Notes</p>
                <p>Places to visit</p>
            </div>

            <div>
                <h5>Itinerary</h5>
                <p>Day One</p>
                <p>Day Two</p>
                <p>Day Three</p>
                <p>Day Four</p>
            </div>
            <button 
                style={{color: 'white', backgroundColor: '#F5793B', fontWeight: 'bold', border: 'none'}} 
                onClick={handleNewTripSubmit} className="btn" type="button">
                New Trip!
            </button>
        </div>
    );
}
  
export default Sidebar;
