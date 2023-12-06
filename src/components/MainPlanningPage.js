import Sidebar from './Sidebar'
import Planner from './Planner'
import MapSection from './MapSection'

function MainPlanningPage({updateTruthy, truthyCheck, vacayData, latLng}) {
    return (
        <div className='row main-content bg-light'>

        {/* Sidebar component */}
        <div className="d-none d-lg-block col-lg-1" >
          <Sidebar updateTruthy={updateTruthy} truthyCheck={truthyCheck}/>
        </div>

        {/* Planner (main) component */}
        <div className="col-12 col-lg-6">
          < Planner vacayData={vacayData} />
        </div>

        {/* Map component */}
        <div className="col-12 col-lg-5">
          <div style={{ width: '100%' }}>
            <MapSection latLng={latLng}/>
          </div>
        </div>

      </div>
    )
}

export default MainPlanningPage;