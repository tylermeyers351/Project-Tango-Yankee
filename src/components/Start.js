import React from "react"

function Start(props) {
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [location, setLocation] = React.useState('');

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
        };

    // Handle form submission, e.g., send data to an API or perform some action
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Location:', location);

    return (
        <form className="startClass" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}
  
export default Start;