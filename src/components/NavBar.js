import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav className="navbar navbar-fixed-top navbar-default">
			<div className="container">
				<button type="button" className="navbar-toggle">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>

				<nav className="navbar-fullscreen" id="navbar-middle">
					<button type="button" className="close" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<ul className="navbar-fullscreen-links">
						{props.routes.map(({ key, path }) => (
							<li className="nav-item">
								<Link key={key} to={path} className="nav-link">
									{key}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</nav>
	);
};

export default NavBar;
