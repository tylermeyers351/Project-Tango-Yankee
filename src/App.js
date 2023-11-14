import Header from './components/Header'
import Start from './components/Start'
import React from "react"


function App() {
  const phrase = "Cool beans"
  const [truthyCheck, setTruthyCheck] = React.useState(true)

  function updateTruthy() {
    setTruthyCheck(prevState => !prevState)
  }

  return (
    <div className='container-fluid p-0'>
      
      <div className='row'>
        <header className="App-header">
          < Header phrase={phrase} updateTruthy={updateTruthy} truthyCheck={truthyCheck}/>
        </header>
      </div>

      <div className='row'>
        <main>
          <div className="col">
              <Start />
          </div>
          <div className="col">
              <Start />
          </div>
          <div className="col">
              <Start />
          </div>
        </main>
      </div>
    
    </div>
  );
}


export default App;
