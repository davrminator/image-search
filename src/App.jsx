import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", height: "100vh", width:"100vw"}}>
      {/* <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a> */}
      <h1 style={{margin: "10px"}}>Pixabay Image Search</h1>
      <div style={{marginBottom: "10px"}}>
        <input style={{minWidth:"250px", marginRight: "10px"}} placeholder='Search for an image...'/>
        <button onClick={() => setCount((count) => count + 1)}>
          Search
        </button>
      </div>
      <div style={{background: "red", height:"70vh", width:"80vw", minWidth:"350px"}}>
        grid of pictures go here
      </div>
    </div>
  )
}

export default App
