import React from 'react'
import '../../SCSS/Main.scss'
import { NavLink } from 'react-router-dom'

export const Error = () => {
	return (
		<div className='error-container'>
			<div className='error-display'>
				<h3 className='error'>Error 404  File Not Found</h3>
				<NavLink to='/search' className='link-home'>Search Again</NavLink>
			</div>
		</div>
	)
}

export default Error