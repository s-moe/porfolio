import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	return (
		<div className="HomePage">
			<div>
				<img
					src="/img/SarahMoeProfileImg.jpg"
					alt="picture of Sarah Moe"
					className="sarah-home-img"
				/>
			</div>
			<div className="sarah-home-p">
				<h1 className="intro-p h1">Hello, I’m Sarah Moe, </h1>{' '}
				<p className="home-p">
					a fullstack software engineer with a background in law. Learn more
					about me <Link to="/about">here.</Link>{' '}
				</p>
				<p className="contact-p">
					<Link to="/contact">Contact me.</Link>
				</p>
			</div>
		</div>
	);
}
