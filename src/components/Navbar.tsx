import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(): ReactElement {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-none'>
				<Link to='/' className='btn btn-ghost text-xl'>
					Rob Magary
				</Link>
			</div>
			<div className='flex-1'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link to='/resume'>resume</Link>
					</li>
					<li>
						<Link to='/blog'>blog</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
