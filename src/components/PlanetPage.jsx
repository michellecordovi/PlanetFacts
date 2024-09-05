/* eslint-disable react/prop-types */
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PlanetDataGrid from './PlanetDataGrid'
import InformationSelectorGrid from '../InformationSelectorGrid'

function PlanetPage({planets}) {
    const {planet, info} = useParams()
    const planetData = planets.find(p => p.name.toLowerCase() === planet.toLowerCase())
 
    useEffect(()=>{
        console.log(info)
        console.log(planetData)
    }, [info, planetData])


    //will select a color based on the planet that is currently selected
    function selectColor(){
        switch(planet){
            case "Mercury":
                return "#419EBB";
            case "Venus":
                return "#EDA249";
            case "Earth":
                return "#6f2ed6";
            case "Mars":
                return "#D14C32";
            case "Jupiter":
                return "#D83A34";
            case "Saturn":
               return "#CD5120";      
            case "Uranus":
                return "#1ec2a4";
            case "Neptune":
                return "#2d68f0";
        }
    }

    //function to determine displayed planet image
    function getPlanetImage(){
        if (info === "structure"){
            return planetData.images.internal;
        } else {
            return planetData.images.planet;
        }
    }

    //function to provide planet description based on selected information
    function getPlanetDescription() {
        switch (info) {
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
                    <img src={getPlanetImage()} alt={`Animated image of the planet ${planet}`} />
                    <img className={info === "geology" ? "geology-image visible" : "geology-image not-visible"} src={planetData.images.geology} alt={`image of ${planet}'s geology`}/>
                </div>

                <div id="description-block">
                    <h1>{planetData.name}</h1>
                    <p id="description">{getPlanetDescription()}</p>
                    <p id="source">Source: <a className="source-link">Wikipedia</a></p>
                    <InformationSelectorGrid selectColor={selectColor} />
                </div>
            </section>
            
            <PlanetDataGrid planetData={planetData} />
        </main>
    )
}

export default PlanetPage;