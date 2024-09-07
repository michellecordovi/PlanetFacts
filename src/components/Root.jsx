/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Root({planets, selectColor}) {
    return (
        <>
            <NavBar planets={planets} selectColor={selectColor} />
            <Outlet/>
        </>
    )
}

export default Root;