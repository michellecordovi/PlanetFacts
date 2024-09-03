import data from '../data.json'
// import {useState, useEffect} from 'react'
// import EarthPage from './components/Earth'

function App() {
    const planets = data;
    // const [selectedPlanet, setSelectedPlanet] = useState("Earth")
    
    return <p> Hello from {planets[Math.floor(Math.random() * 8)].name}!</p>

}

export default App
