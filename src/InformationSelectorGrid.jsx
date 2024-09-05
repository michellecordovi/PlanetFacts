/* eslint-disable react/prop-types */
import {useEffect} from 'react'
import {NavLink, useParams} from 'react-router-dom'

function InformationSelectorGrid({selectColor}){
    const {planet, info} = useParams()

    useEffect(() => {
        document.querySelectorAll(".information-selector-box").forEach(el => {
            el.style.backgroundColor = "";
        });

        document.querySelector(`.${info}`).style.backgroundColor = selectColor();
    },[info, selectColor])

    return (
        <div id="information-selector-grid">
            <NavLink to={`/${planet}/overview`}>
                <div className="information-selector-box overview">
                    <p className="selector-number">01</p>
                    <h2>Overview</h2>
                </div>
            </NavLink>

            <NavLink to={`/${planet}/structure`}>
                <div className="information-selector-box structure">
                    <p className="selector-number">02</p>
                    <h2>Internal Structure</h2>
                </div>
            </NavLink>

            <NavLink to={`/${planet}/geology`}>
                <div className="information-selector-box geology">
                    <p className="selector-number">03</p>
                    <h2>Surface Geology</h2>
                </div>
            </NavLink>
        </div>
    )
}

export default InformationSelectorGrid;
