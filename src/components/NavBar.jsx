import {NavLink} from 'react-router-dom'

function NavBar() {


    return (
        <header>
            <div id="site-logo">THE PLANETS</div>
            <nav>
                <ul>
                    <li><NavLink to="/Mercury/overview">Mercury</NavLink></li>
                    <li><NavLink to="/Venus/overview">Venus</NavLink></li>
                    <li><NavLink to="/Earth/overview">Earth</NavLink></li>
                    <li><NavLink to="/Mars/overview">Mars</NavLink></li>
                    <li><NavLink to="/Jupiter/overview">Jupiter</NavLink></li>
                    <li><NavLink to="/Saturn/overview">Saturn</NavLink></li>
                    <li><NavLink to="/Uranus/overview">Uranus</NavLink></li>
                    <li><NavLink to="/Neptune/overview">Neptune</NavLink></li>
                </ul>  
            </nav>
        </header>
    )
}

export default NavBar;