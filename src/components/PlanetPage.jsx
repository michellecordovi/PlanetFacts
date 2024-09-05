/* eslint-disable react/prop-types */
import {useParams} from 'react-router-dom'
import PlanetDataGrid from './PlanetDataGrid'

function PlanetPage({planets}) {
    const {planet} = useParams()
    const planetData = planets.find(p => p.name.toLowerCase() === planet.toLowerCase())

    return (
        <main>
            <section id="planet-description">
                <div id="description-block">
                    <h1>Hello from {planetData.name}</h1>
                    <p>{planetData.overview.content}</p>
                </div>
            </section>
            
            <PlanetDataGrid planetData={planetData} />
        </main>
    )
}

export default PlanetPage;