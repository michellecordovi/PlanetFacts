import data from '../data.json'
import Root from './components/Root'
import PlanetPage from './components/PlanetPage'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from 'react-router-dom'

function App() {
    const planets = data;

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Navigate to="/Earth/overview" replace />} />
            <Route path="/:planet/:info" element={<PlanetPage planets={planets} />} />
        </Route>
    ))

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )

}

export default App
