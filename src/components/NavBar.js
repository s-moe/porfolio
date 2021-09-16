import React from 'react';
import { Link } from 'react-router-dom';
// import { HiFire } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons';

const NavBar = props => {
	return (
		<div className="menu-wrap">
			<input type="checkbox" className="toggler" />
			<div className="hamburger">
				<div></div>
			</div>
			<div className="menu">
				<div>
					<div>
						{props.routes.map(({ key, path }) => (
							<ul className="nav-item">
								<Link key={key} to={path} className="nav-link">
									{key}
								</Link>
							</ul>
						))}
					</div>
				</div>
				<header className="showcase">
					<div className="container showcase-inner">
						<h1>Sarah Moe</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<div className="container">
							<div className="fixed-bottom Footer">
								<a href="https://www.linkedin.com/in/samoe/" target="_blank">
									<i className="fab fa-linkedin" />
								</a>{' '}
								<a href="https://github.com/s-moe" target="_blank">
									{AiFillGithub}
								</a>
							</div>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
};

export default NavBar;
