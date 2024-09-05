/* eslint-disable react/prop-types */
import {NavLink} from 'react-router-dom'

function NavBar() {


    return (
        <header>
            <div>THE PLANETS</div>
            <nav>
                <ul>
                    <li><NavLink to="/Mercury">Mercury</NavLink></li>
                    <li><NavLink to="/Venus">Venus</NavLink></li>
                    <li><NavLink to="/Earth">Earth</NavLink></li>
                    <li><NavLink to="/Mars">Mars</NavLink></li>
                    <li><NavLink to="/Jupiter">Jupiter</NavLink></li>
                    <li><NavLink to="/Saturn">Saturn</NavLink></li>
                    <li><NavLink to="/Uranus">Uranus</NavLink></li>
                    <li><NavLink to="/Neptune">Neptune</NavLink></li>
                </ul>  
            </nav>
        </header>
    )
}

export default NavBar;