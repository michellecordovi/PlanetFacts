/* eslint-disable react/prop-types */
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import PlanetDataGrid from './PlanetDataGrid'
import InformationSelectorGrid from './InformationSelectorGrid'

function PlanetPage({planets, selectColor}) {
    const {planet, info} = useParams()
    const planetData = planets.find(p => p.name.toLowerCase() === planet.toLowerCase())

    const [isMobile, setIsMobile] = useState(window.innerWidth < 740)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 740)
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, [])

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
            {isMobile ? <InformationSelectorGrid selectColor={selectColor} isMobile={isMobile} setIsMobile={setIsMobile} /> : ''}

            <section id="planet-description-section">

                <div id="planet-image-container">
                    <img className ="planet-image" src={getPlanetImage()} alt={`Animated image of the planet ${planet}`} />
                    <img className={info === "geology" ? "geology-image visible" : "geology-image not-visible"} src={planetData.images.geology} alt={`image of ${planet}'s geology`}/>
                </div>

                <div id="description-block">
                    <h1>{planetData.name}</h1>
                    <p id="description">{getPlanetDescription()}</p>
                    <div id="source">
                        <span>Source:</span>
                        <a href={planetData[info].source} target="_blank" className="source-link">Wikipedia</a>
                        <a href={planetData[info].source} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg></a>
                    </div>
                </div>

                {!isMobile ? <InformationSelectorGrid selectColor={selectColor} isMobile={isMobile} setIsMobile={setIsMobile} /> : ''}
                
            </section>
            
            <PlanetDataGrid planetData={planetData} />
        </main>
    )
}

export default PlanetPage;