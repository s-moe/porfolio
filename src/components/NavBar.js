import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
	const [status, setStatus] = useState('open');
	return (
		<div className="ContainerShowSidebar">
			<nav className="NavBar-default fixed-top navbar-expand-md navbar nav">
				<div className="burger-menu-container">
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
				</div>
				<div>
					<NavLink
						key="Home"
						to="/"
						className="nav-link nav-item Sarah"
						exact
						activeClassName="activeLink"
					>
						SARAH MOE
					</NavLink>
				</div>

				<div className="collapse navbar-collapse" id="toggleMobileMenu">
					<NavLink
						key="About"
						to="/about"
						className="nav-link nav-item"
						activeClassName="activeLink"
					>
						About
					</NavLink>

					<NavLink
						key="Portfolio"
						to="/portfolio"
						className="nav-link nav-item"
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
						activeClassName="activeLink"
						target="_blank"
					>
						Resume
					</Link>

					<NavLink
						key="Skills"
						to="/skills"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Skills
					</NavLink>

					<NavLink
						key="Contact"
						to="/contact"
						className="nav-link nav-item contact"
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
