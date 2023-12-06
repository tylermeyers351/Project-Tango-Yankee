import Start from './Start'

function InitialLandingPage({ updateTruthy, setLatLng }) {
    return (
        <div className='row main-content bg-light'>
          <div className="col-1 col-md-3 col-xl-4" >
            {/* Unused column */}
          </div>
          
          <div className="col-10 col-md-6 col-xl-4">
            <Start 
                updateTruthy={updateTruthy} setLatLng={setLatLng}
            />
          </div>
          
          <div className="col-1 col-md-3 col-xl-4">
            {/* Unused column */}
          </div>
      </div>
    )
}

export default InitialLandingPage;