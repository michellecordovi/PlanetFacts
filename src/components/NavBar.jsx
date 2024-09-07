import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import {useState, useEffect} from 'react'

function NavBar() {
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


    return isDesktop ? <DesktopNav /> : <MobileNav/>;
}

export default NavBar;