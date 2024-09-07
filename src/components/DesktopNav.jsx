/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

function DesktopNav({planets, selectColor}) {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 930)

    useEffect(() => {
        function handleResize() {
            setIsLargeScreen(window.innerWidth >930)
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, [])

    function handleMouseOver(e) {
        const target = e.target

        if(isLargeScreen){
            target.parentNode.style.borderTop = `4px solid ${selectColor(target.innerHTML)}`
        } else {
            target.parentNode.style.borderBottom = `4px solid ${selectColor(target.innerHTML)}`
        }
    }

    function handleMouseOut(e) {
        e.target.parentNode.style.border = "none"
    }



    return (
        <header id="desktop-header">
            <div id="site-logo">THE PLANETS</div>
            <nav>
                <ul>
                    {planets.map(planet => (
                        <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={planet.name}>
                            <NavLink to={`/${planet.name}/overview`}>{planet.name}</NavLink>
                        </li>
                    ))}
                </ul>  
            </nav>
        </header>
    )
}

export default DesktopNav;