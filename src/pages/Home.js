import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	return (
		<div className="HomePage">
			<img src="/img/SarahMoeProfileImg.jpg" alt="picture of Sarah Moe" />
			<p>
				Hi, I’m Sarah Moe, a fullstack software engineer with a background in
				law. Learn more about me <Link to="/about">here.</Link>
			</p>
			<p>
				{' '}
				<Link to="/contact">Get in touch.</Link>
			</p>
		</div>
	);
}
