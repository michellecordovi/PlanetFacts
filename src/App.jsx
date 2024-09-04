import data from '../data.json'
import NavBar from './components/NavBar';

function App() {
    const planets = data;

    
    return (
        <>
            <NavBar/>
            <p> Hello from {planets[Math.floor(Math.random() * 8)].name}!</p>
        </>
    )

}

export default App
