import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
	return (
		// <div className="container Footer">
		<div className="Footer">
			<a href="https://github.com/s-moe" target="_blank">
				<FaGithub className="github-icon" size="2em" color="grey" />
			</a>
			<a href="https://www.linkedin.com/in/samoe/" target="_blank">
				<FaLinkedin className="linkedIn-icon" size="2em" color="grey" />
			</a>
		</div>
		// </div>
	);
}
