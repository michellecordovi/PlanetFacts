import data from '../data.json'
import Root from './components/Root'
import PlanetPage from './components/PlanetPage'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from 'react-router-dom'

function App() {
    const planets = data;

    //will select a color based on the planet that is currently selected
    function selectColor(planet){
        switch(planet.toLowerCase()){
            case "mercury":
                return "#419EBB";
            case "venus":
                return "#EDA249";
            case "earth":
                return "#6f2ed6";
            case "mars":
                return "#D14C32";
            case "jupiter":
                return "#D83A34";
            case "saturn":
               return "#CD5120";      
            case "uranus":
                return "#1ec2a4";
            case "neptune":
                return "#2d68f0";
        }
    }

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root planets={planets} />}>
            <Route index element={<Navigate to="/Earth/overview" replace />} />
            <Route path="/:planet/:info" element={<PlanetPage planets={planets} selectColor={selectColor} />} />
        </Route>
    ))

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )

}

export default App
