import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {
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
					<div className="Sarah">SARAH MOE</div>
					<a href="https://github.com/s-moe" target="_blank">
						<FaGithub className="github-icon" size="1.5em" color="grey" />
					</a>
					<a href="https://www.linkedin.com/in/samoe/" target="_blank">
						<FaLinkedin className="linkedIn-icon" size="1.5em" color="grey" />
					</a>
				</div>

				<div className="collapse navbar-collapse" id="toggleMobileMenu">
					<NavLink
						key="Home"
						to="/"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Home
					</NavLink>

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

					<NavLink
						key="Resume"
						to="/resume"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Resume
					</NavLink>

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
