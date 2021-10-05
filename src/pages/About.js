import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
	return (
		<div className="AboutPage">
			<p>
				Hi, I’m Sarah Moe, a software engineer with a background in law. I
				tackle complex problems with creativity, ingenuity, and attention to
				detail. My passion for innovation and advancement are evident in each
				project. My experience solving seemingly unsolvable problems enables me
				to approach each project with curiosity and confidence.
			</p>
			<p>
				Working remotely for the past 10 years has strengthened my communication
				skills (as well as my cooking skills). When I’m not coding I am learning
				something new: TypeScript, skimboarding, and sewing are my current areas
				of interest.
			</p>
			<p>
				{' '}
				<Link to="/contact">Say hello.</Link>
			</p>
		</div>
	);
}
