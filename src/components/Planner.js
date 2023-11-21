import React from "react"

function Planner(props) {
    const vacayData = props.vacayData
    return (
        <div className="m-3">
        {vacayData && 
          <>
            <div>
                <h3>Trip to {vacayData.location}</h3>
                <p>From {vacayData.startDate} to {vacayData.endDate}</p>
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
          </>
        }
        </div>
    );
}
  
export default Planner;