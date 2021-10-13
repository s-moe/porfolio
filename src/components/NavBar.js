import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import NavLink from './SuperLink';

import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
	const [status, setStatus] = useState('open');
	return (
		<div className="ContainerShowSidebar">
			<nav className="NavBar-default fixed-top navbar-expand-md navbar nav">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#toggleMobileMenu"
					aria-controls="toggleMobileMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<GiHamburgerMenu className="hamburger" size="2em" />
				</button>

				<div>
					<NavLink
						key="Home"
						to="/"
						classes={['nav-link', 'nav-item', 'Sarah']}
					>
						SARAH MOE
					</NavLink>
				</div>

				<div className="collapse navbar-collapse" id="toggleMobileMenu">
					<NavLink
						classes={['nav-link', 'nav-item']}
						toggle="collapse"
						target=".navbar-collapse"
						key="About"
						to="/about"
					>
						About
					</NavLink>

					<NavLink
						key="Portfolio"
						to="/portfolio"
						classes={['nav-link', 'nav-item']}
						toggle="collapse"
						target=".navbar-collapse"
						exact
						activeClassName="activeLink"
					>
						Portfolio
					</NavLink>

					<Link
						key="Resume"
						to="documents/Portfolio Rough Draft Resume.docx.pdf"
						className="nav-link nav-item"
						exact
						target="_blank"
					>
						Resume
					</Link>

					<NavLink
						key="Skills"
						to="/skills"
						classes={['nav-link', 'nav-item']}
						toggle="collapse"
						target=".navbar-collapse"
						exact
						activeClassName="activeLink"
					>
						Skills
					</NavLink>

					<NavLink
						key="Contact"
						to="/contact"
						classes={['nav-link', 'nav-item']}
						toggle="collapse"
						target=".navbar-collapse"
						exact
						activeClassName="activeLink"
					>
						Contact
					</NavLink>
				</div>
			</nav>
		</div>
	);
}
