/* eslint-disable react/prop-types */
import {useParams} from 'react-router-dom'

function PlanetPage({planets}) {
    const {planet} = useParams()
    const planetData = planets.find(p => p.name.toLowerCase() === planet.toLowerCase())

    return (
        <>
            <h1>Hello from {planetData.name}</h1>
            <p>{planetData.overview.content}</p>
        </>
    )
}

export default PlanetPage;