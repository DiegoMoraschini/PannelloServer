import './App.css'
import {sistema,servers,avvisi} from './dati.js'

function App() {

  console.log(`numero server: ${servers.length}`)
  console.log(`numero avvisi: ${avvisi.length}`)
  
  return (
    <>
      <div className='pannello'>
        <h1>
          {sistema.nome}
        </h1>
      </div>
    </>
  )
}

export default App
