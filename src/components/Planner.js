import React from "react"

function Planner(props) {
    const vacayData = props.vacayData
    return (
        <div className="m-4">
        {vacayData && 
          <>
            <p>Start Date: {vacayData.startDate}</p>
            <p>End Date: {vacayData.endDate}</p>
            <p>Location: {vacayData.location}</p>
          </>
        }
        </div>
    );
}
  
export default Planner;