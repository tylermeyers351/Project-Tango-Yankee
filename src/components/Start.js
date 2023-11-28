import React from "react"

function Start(props) {
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [error, setError] = React.useState("");

    const handleStartDateChange = (e) => {
      setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
      setEndDate(e.target.value);
    };

    const handleLocationChange = (e) => {
      setLocation(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

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
        location: location
      };

      setError("");

      localStorage.setItem("localData", JSON.stringify(vacationData));

      props.updateTruthy()
    };

    return (
      <div className="mt-5" style={{ border: '1px solid grey', borderRadius: '10px' }}>
        <h3 style={{ color: '#2a2a2a' }} className="m-4">Plan the Trip of a Lifetime!</h3>

        <form onSubmit={handleSubmit}>
          {/* Location Selection */}
          <div className="row m-3">
            <div>
              <input
                autoComplete="off"
                type="text"
                id="location"
                value={location}
                onChange={handleLocationChange}
                placeholder="Where to?"
              />
            </div>
          </div>

          {/* Date Selection */}
          <div className="row m-3">
            
            <div className="col">
              <label htmlFor="startDate">Start Date:&nbsp;</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>

            <div className="col">
              <label htmlFor="endDate">End Date:&nbsp;</label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>

          </div>

          {/* TM Edit 11/28 */}
          {error && <p style={{ color: "red", textAlign:'center'}}>{error}</p>}

          <div className="d-grid m-4 p-1">
            <button style={{ color: 'white', backgroundColor: '#F5793B', fontWeight: 'bold', border: 'none' }} onClick={handleSubmit} className="btn" type="button">Submit</button>
          </div>
        </form>
      </div>
    );
}
  
export default Start;
