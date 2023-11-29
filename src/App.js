import Header from './components/Header'
import Start from './components/Start'
import Sidebar from './components/Sidebar'
import Planner from './components/Planner'
import MapSection from './components/MapSection'
import React from "react"


function App() {
  // If there is data in local Storage (localData), it will start the truthyCheck as false. 
  // True displays the <Start /> component,
  // and false displays the <Sidebar />, <Planner />, and <Map /> components.
  const [truthyCheck, setTruthyCheck] = React.useState(!localStorage.getItem('localData'))
  const [latLng, setLatLng] = React.useState({ 
    lat: 34.1753152,
    lng: -118.9087979
  })

  function updateTruthy() {
    setTruthyCheck(prevState => !prevState)
    console.log("Truthy updated. Switching components out.")
  }

  const vacayData = JSON.parse(localStorage.getItem("localData"))
  
  

  return (
    <div className='container-fluid'>
      
      <div className='row web-header bg-light'>
          < Header />
      </div>

      {/* Initial landing page */}
      {/* Only display when truthyCheck is true - when switched to false, other components will be displayed */}
      {truthyCheck && (
      <div className='row main-content bg-light'>
          <div className="col-1 col-md-3 col-xl-4" >
            {/* <p>Unused Column 1</p> */}
          </div>
          <div className="col-10 col-md-6 col-xl-4">
            <Start updateTruthy={updateTruthy} setLatLng={setLatLng}/>
          </div>
          <div className="col-1 col-md-3 col-xl-4">
            {/* <p>Unused Column 3</p> */}
          </div>
      </div>
      )}

      {/* Vacation planning page */}
      {/* Only display when truthyCheck is false */}
      {!truthyCheck && (
      <div className='row main-content bg-light'>

        {/* Sidebar component */}
        <div className="d-none d-lg-block col-lg-2 col-xl-2" >
          <Sidebar updateTruthy={updateTruthy} truthyCheck={truthyCheck}/>
        </div>

        {/* Planner (main) component */}
        <div className="col-12 col-lg-6 col-xl-6">
          < Planner vacayData={vacayData} />
        </div>

        {/* Map component */}
        <div className="col-12 col-lg-4 col-xl-4">
          <div style={{ width: '100%' }}>
            <MapSection latLng={latLng}/>
          </div>
        </div>

      </div>
      )}
    
    </div>
  );
}

export default App;
