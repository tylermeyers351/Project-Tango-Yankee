import React from "react"

function Start(props) {
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [location, setLocation] = React.useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        console.log(e.target.value);
        };

        const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
        console.log(e.target.value);
        };

        const handleLocationChange = (e) => {
        setLocation(e.target.value);
        console.log(e.target.value);
        };

        const handleSubmit = (e) => {
        e.preventDefault();
        };

    // Handle form submission, e.g., send data to an API or perform some action
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Location:', location);

    return (
      <>
        <h3>Plan a Trip you'll Never Forget!</h3>

        <form onSubmit={handleSubmit}>
          {/* Location Selection */}
          <div className="row">
            <div>
              <input
                type="text"
                id="location"
                value={location}
                onChange={handleLocationChange}
                placeholder="Where to?"
              />
            </div>
          </div>

          {/* Date Selection */}
          <div className="row">
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

          <div className="d-grid">
            <button className="btn btn-primary" type="button">Submit</button>
          </div>
        </form>
      </>
    );
}
  
export default Start;
