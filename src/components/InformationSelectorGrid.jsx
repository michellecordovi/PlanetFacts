/* eslint-disable react/prop-types */
import {useEffect} from 'react'
import {NavLink, useParams} from 'react-router-dom'

function InformationSelectorGrid({selectColor, isMobile, setIsMobile}){
    const {planet, info} = useParams()

    //detects changes in screen size
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 740)
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, [])

    //controls background color of information selectors based on whether or not they are the selected information 
    useEffect(() => {
        // Remove background color from all boxes
        document.querySelectorAll(".information-selector-box").forEach(el => {
            el.style.backgroundColor = "";
            el.style.borderBottom = '';
        });

        // Apply background color or bottom border to the selected box depending on screen size
        const selectedBox= document.querySelector(`.${info}`)

        if (isMobile){
            selectedBox.style.borderBottom = `3px solid ${selectColor(planet)}`
        } else {
            selectedBox.style.backgroundColor = selectColor(planet);
        }
        
    },[info, isMobile, planet, selectColor])

    return (
        <section id="information-selector-grid">
            <NavLink to={`/${planet}/overview`}>
                <div className="information-selector-box overview">
                    {isMobile ? '' : <p className="selector-number">01</p> }
                    <h2>Overview</h2>
                </div>
            </NavLink>

            <NavLink to={`/${planet}/structure`}>
                <div className="information-selector-box structure">
                    {isMobile ? '' : <p className="selector-number">02</p> }
                    <h2>{isMobile ? 'Structure' : 'Internal Structure'}</h2>
                </div>
            </NavLink>

            <NavLink to={`/${planet}/geology`}>
                <div className="information-selector-box geology">
                    {isMobile ? '' : <p className="selector-number">03</p> }
                    <h2>{isMobile ? 'Geology' : 'Surface Geology'}</h2>
                </div>
            </NavLink>
        </section>
    )
}

export default InformationSelectorGrid;
