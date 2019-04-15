import React from 'react'
import '../../SCSS/Main.scss'
import { NavLink } from 'react-router-dom'

export const Welcome = () => {
	return (
		<div className="welcome">
			<div className='welcome-text'>
				<h2 className='welcome-msg'>Thank you for choosing ForeCast!</h2>
				<h3>Your daily weather is just a few clicks away!</h3>
				<NavLink to='/search' className="link">Search By City</NavLink>
			</div>
		</div>
	)
}

export default Welcome