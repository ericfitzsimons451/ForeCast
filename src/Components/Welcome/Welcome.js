import React from 'react'
import './Welcome.scss'
import { NavLink } from 'react-router-dom'

export const Welcome = () => {
    return (
        <div className="welcome">
            <h2>Thank you for choosing ForeCast!</h2>
            <h3>Your daily weather is just a few clicks away!</h3>
            <NavLink to='/seach'>Search By City</NavLink>
        </div>
    )
}

export default Welcome