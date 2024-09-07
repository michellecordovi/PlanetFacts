/* eslint-disable react/prop-types */
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import {useState, useEffect} from 'react'

function NavBar({planets}) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 740)

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >740)
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, [])


    return isDesktop ? <DesktopNav planets={planets} /> : <MobileNav/>;
}

export default NavBar;