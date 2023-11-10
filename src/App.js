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
    <div className="App">
      
      <header className="App-header">
        < Header phrase={phrase} updateTruthy={updateTruthy} truthyCheck={truthyCheck}/>
      </header>

      <main>
        <Start />
      </main>
    
    </div>
  );
}


export default App;
