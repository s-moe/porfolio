import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	return (
		<div className="HomePage">
			<img
				src="/img/SarahMoeProfileImg.jpg"
				alt="picture of Sarah Moe"
				className="sarah-home-img"
			/>
			<div className="sarah-home-p">
				<h1>Hello, I’m Sarah Moe, </h1>{' '}
				<p>
					a fullstack software engineer with a background in law. Learn more
					about me <Link to="/about">here.</Link>{' '}
					<Link to="/contact">Get in touch.</Link>
				</p>
			</div>
		</div>
	);
}
