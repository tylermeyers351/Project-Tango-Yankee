import Header from './components/Header'
import Start from './components/Start'
import React from "react"


function App() {
  const [truthyCheck, setTruthyCheck] = React.useState(true)

  function updateTruthy() {
    setTruthyCheck(prevState => !prevState)
  }

  return (
    <div className='container-fluid'>
      
      <div className='row webHeader bg-light'>
          < Header updateTruthy={updateTruthy} truthyCheck={truthyCheck}/>
      </div>

      <div className='row mainContent bg-light'>
          <div className="col-1 col-md-3 col-xl-4" >
            {/* <p>Column 1</p> */}
          </div>
          <div className="col-10 col-md-6 col-xl-4">
            <Start />
          </div>
          <div className="col-1 col-md-3 col-xl-4">
            {/* <p>Column 3</p> */}
          </div>
      </div>
    
    </div>
  );
}


export default App;
