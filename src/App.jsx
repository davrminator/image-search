import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Modal from './Modal'

const App = () => {
  const [query, setQuery] = useState("")
  const [data, setData] = useState({})
  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState({});

  const search = () => {
    axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${query}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }

  const showDetails = (currentImage) => {
    setDetail(currentImage)
    toggleModal()
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", height: "100vh", width:"100vw"}}>
      <h1 style={{margin: "10px"}}>Pixabay Image Search</h1>
      <div style={{marginBottom: "20px"}}>
        <input style={{minWidth:"250px", marginRight: "10px"}} placeholder='Search for an image...' value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button onClick={() => search()}>
          Search
        </button>
      </div>
      <div style={{borderRadius: "8px", height:"70vh", width:"80vw", minWidth:"350px", display:"flex", justifyContent: "space-around", alignItems:"center", flexWrap: "wrap"}}>
        {data.hits && data.hits.map((item) => {
          return <img key={item.previewURL} src={item.previewURL} alt={item.tags} style={{borderRadius: "8px", background: "white", margin: "2px"}} onClick={() => showDetails(item)}/>
        })}
      </div>
      {modal && <Modal toggleModal={() => toggleModal()} detail={detail}/>}
    </div>
  )
}

export default App
