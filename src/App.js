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
      
      <div className='row webHeader'>
          < Header updateTruthy={updateTruthy} truthyCheck={truthyCheck}/>
      </div>

      <div className='row mainContent'>
          <div className="col-3"></div>
          <div className="col-6">
            <Start />
          </div>
          <div className="col-3"></div>
      </div>
    
    </div>
  );
}


export default App;
