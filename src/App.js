import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Start from './components/Start'
import React from "react"


function App() {
  // If there is data in local Storage (localData), it will start the truthyCheck as false. 
  // True displays the <Start /> component,
  // and false displays the <Sidebar />, <Planner />, and <Map /> components.
  const [truthyCheck, setTruthyCheck] = React.useState(!localStorage.getItem('localData'))

  function updateTruthy() {
    setTruthyCheck(prevState => !prevState)
    console.log("Truthy updated. Switching components out.")
  }

  const vacayData = JSON.parse(localStorage.getItem("localData"))

  return (
    <div className='container-fluid'>
      
      <div className='row webHeader bg-light'>
          < Header updateTruthy={updateTruthy} truthyCheck={truthyCheck}/>
      </div>

      {/* Only display when truthyCheck is true - when switched to false, other components will be displayed */}
      {truthyCheck && (
      <div className='row mainContent bg-light'>
          <div className="col-1 col-md-3 col-xl-4" >
            {/* <p>Unused Column 1</p> */}
          </div>
          <div className="col-10 col-md-6 col-xl-4">
            <Start updateTruthy={updateTruthy} />
          </div>
          <div className="col-1 col-md-3 col-xl-4">
            {/* <p>Unused Column 3</p> */}
          </div>
      </div>
      )}

      {/* Only display when truthyCheck is false */}
      {!truthyCheck && (
      <div className='row mainContent bg-light'>
          <div className="col-1 col-md-3 col-xl-4" >
            <p>Column 1 (Sidebar)</p>
            <Sidebar updateTruthy={updateTruthy} truthyCheck={truthyCheck}/>
          </div>
          <div className="col-10 col-md-6 col-xl-4">
            <p>Column 2 (Planner - main content)</p>
            {vacayData && 
            <>
              <p>Start Date: {vacayData.startDate}</p>
              <p>End Date: {vacayData.endDate}</p>
              <p>Location: {vacayData.location}</p>
            </>
            }
          </div>
          <div className="col-1 col-md-3 col-xl-4">
            <p>Column 3 (Map)</p>
          </div>
      </div>
      )}
    
    </div>
  );
}


export default App;
