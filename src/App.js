import Header from './components/Header'
import InitialLandingPage from './components/InitialLandingPage'
import React from "react"
import MainPlanningPage from './components/MainPlanningPage'


function App() {
  // If there is data in local Storage (localData), it will start the truthyCheck as false.
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
          <Header />
      </div>

      {/* Only display when truthyCheck is true - when switched to false, other components will be displayed */}
      {truthyCheck && (
        <InitialLandingPage 
          updateTruthy={updateTruthy}
          setLatLng={setLatLng}
        />
      )}

      {/* Only display when truthyCheck is false */}
      {!truthyCheck && (
        <MainPlanningPage 
          updateTruthy={updateTruthy}
          truthyCheck={truthyCheck}
          vacayData={vacayData}
          latLng={latLng}
        />
      )}
    
    </div>
  );
}

export default App;