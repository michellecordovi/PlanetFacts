/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PlanetDataGrid from './PlanetDataGrid'
import InformationSelectorGrid from '../InformationSelectorGrid'

function PlanetPage({planets}) {
    const [selectedInformation, setSelectedInformation] = useState("overview")
    const {planet} = useParams()
    const planetData = planets.find(p => p.name.toLowerCase() === planet.toLowerCase())

    useEffect(() => {
        console.log(selectedInformation)
    },[selectedInformation])


    //function to provide planet description based on selected information
    function getPlanetDescription() {
        switch (selectedInformation) {
            case "overview":
                return planetData.overview.content;
            case "structure":
                return planetData.structure.content;
            case "geology":
                return planetData.geology.content;
            default:
                return planetData.overview.content;
        }
    }

    return (
        <main>
            <section id="planet-description-section">
                <div id="planet-image-container">
                    <img src={planetData.images.planet} alt={`Animated image of the planet ${planet}`} />
                </div>

                <div id="description-block">
                    <h1>{planetData.name}</h1>
                    <p id="description">{getPlanetDescription()}</p>
                    <p id="source">Source: <span className="source-link">WikiPedia</span></p>
                    <InformationSelectorGrid setSelectedInformation={setSelectedInformation} />
                </div>
            </section>
            
            <PlanetDataGrid planetData={planetData} />
        </main>
    )
}

export default PlanetPage;