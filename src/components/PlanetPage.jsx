/* eslint-disable react/prop-types */
import {useParams} from 'react-router-dom'
import PlanetDataGrid from './PlanetDataGrid'
import InformationSelectorGrid from '../InformationSelectorGrid'

function PlanetPage({planets}) {
    const {planet} = useParams()
    const planetData = planets.find(p => p.name.toLowerCase() === planet.toLowerCase())

    return (
        <main>
            <section id="planet-description-section">
                <div id="planet-image-container">
                    <img src={planetData.images.planet} alt={`Animated image of the planet ${planet}`} />
                </div>

                <div id="description-block">
                    <h1>{planetData.name}</h1>
                    <p id="description">{planetData.overview.content}</p>
                    <p id="source">Source: <span className="source-link">WikiPedia</span></p>
                    <InformationSelectorGrid/>
                </div>
            </section>
            
            <PlanetDataGrid planetData={planetData} />
        </main>
    )
}

export default PlanetPage;