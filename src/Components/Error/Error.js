import React from 'react'
import './Error.scss'
import { NavLink } from 'react-router-dom'

export const Error = () => {
    return (
        <div>
            <h3>Error 404  File Not Found</h3>
            <NavLink to='/search'>Search Again</NavLink>
        </div>
    )
}

export default Error