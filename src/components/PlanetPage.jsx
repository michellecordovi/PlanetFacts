/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PlanetDataGrid from './PlanetDataGrid'
import InformationSelectorGrid from '../InformationSelectorGrid'

function PlanetPage({planets}) {
    const [selectedInformation, setSelectedInformation] = useState("overview")
    const {planet} = useParams()
    const planetData = planets.find(p => p.name.toLowerCase() === planet.toLowerCase())
 
    
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
 
    //this function returns the selected information back to overview whenever you click to see a new planet
    useEffect(() => {
        setSelectedInformation("overview");
    },[planet])


    //function to determine displayed planet image
    function getPlanetImage(){
        if (selectedInformation === "structure"){
            return planetData.images.internal;
        } else {
            return planetData.images.planet;
        }
    }

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
                    <img src={getPlanetImage()} alt={`Animated image of the planet ${planet}`} />
                    <img className={selectedInformation === "geology" ? "geology-image visible" : "geology-image not-visible"} src={planetData.images.geology} alt={`image of ${planet}'s geology`}/>
                </div>

                <div id="description-block">
                    <h1>{planetData.name}</h1>
                    <p id="description">{getPlanetDescription()}</p>
                    <p id="source">Source: <a className="source-link">Wikipedia</a></p>
                    <InformationSelectorGrid selectColor={selectColor} selectedInformation={selectedInformation} setSelectedInformation={setSelectedInformation} />
                </div>
            </section>
            
            <PlanetDataGrid planetData={planetData} />
        </main>
    )
}

export default PlanetPage;