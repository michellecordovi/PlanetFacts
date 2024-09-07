/* eslint-disable react/prop-types */
import {NavLink} from 'react-router-dom'

function DesktopNav({planets}) {
    return (
        <header id="desktop-header">
            <div id="site-logo">THE PLANETS</div>
            <nav>
                <ul>
                    {planets.map(planet => (
                        <li key={planet.name}>
                            <NavLink to={`/${planet.name}/overview`}>{planet.name}</NavLink>
                        </li>
                    ))}
                </ul>  
            </nav>
        </header>
    )
}

export default DesktopNav;