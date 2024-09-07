/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Root({planets}) {
    return (
        <>
            <NavBar planets={planets} />
            <Outlet/>
        </>
    )
}

export default Root;