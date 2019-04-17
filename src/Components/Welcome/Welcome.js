import React from 'react'
import '../../SCSS/Main.scss'
import { NavLink } from 'react-router-dom'

export const Welcome = () => {
	return (
		<div className="welcome">
			<div className='welcome-thanks-box'>
				<h2 className='welcome-thanks'>Thank you for choosing ForeCast!</h2>
				<h3 className='welcome-suggestion'>Your daily weather is just a few clicks away!</h3>
				<NavLink to='/search' className="link">Search By City</NavLink>
			</div>
		</div>
	)
}

export default Welcome