/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {NavLink} from 'react-router-dom'
import {useState} from 'react'

function MobileNav({planets, selectColor}) {
    const [isHidden, setIsHidden] = useState(true)
    
    function handleHamburgerClick(){
        setIsHidden(!isHidden);
    }

    function handleLinkClick(){
        setIsHidden(!isHidden)
    }

    return (
        <header className={isHidden? `mobile-header mobile-header-hidden`: `mobile-header mobile-header-open`}>
            <div id="site-logo">THE PLANETS</div>
            <svg onClick={handleHamburgerClick} xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
            <nav className={isHidden? `mobile-nav hidden`: `mobile-nav open`}>
                <ul>
                    {planets.map(planet => (
                        <li key={planet.name}>
                            <NavLink onClick={handleLinkClick} to={`/${planet.name}/overview`}>
                                <div className="nav-color-code" style={{backgroundColor: selectColor(planet.name)}}></div>
                                <div className="mobile-nav-planet-name">{planet.name}</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
                            </NavLink>
                        </li>
                    ))}
                </ul>  
            </nav>
        </header>
    )
}

export default MobileNav;