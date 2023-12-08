import Planner from './Planner'
import MapSection from './MapSection'

function MainPlanningPage({updateTruthy, truthyCheck, vacayData, latLng}) {
    return (
        <div className='row main-content bg-light'>

        {/* Planner (main) component */}
        <div className="col-12 col-lg-7">
          < Planner updateTruthy={updateTruthy} vacayData={vacayData} />
        </div>

        {/* Map component */}
        {/* Display for large screens (position fixed) */}
        <div className="d-none d-lg-block col-lg-5 position-fixed top-9 bottom-5" style={{ right: 0 }}>
          <div style={{ width: '100%' }}>
            <MapSection latLng={latLng}/>
          </div>
        </div>

        {/* Map component */}
        {/* Display for small screens (position unfixed) */}
        <div className="col-12 d-lg-none">
          <div style={{ width: '100%' }}>
            <MapSection latLng={latLng}/>
          </div>
        </div>

      </div>
    )
}

export default MainPlanningPage;