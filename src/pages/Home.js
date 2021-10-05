import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	return (
		<div className="HomePage">
			<img src="https://imgur.com/9NJA8zk" alt="picture of Sarah Moe" />
			<p>
				Hi, I’m Sarah Moe, a software engineer with a background in law. Learn
				more about me <Link to="/about">here.</Link>
			</p>
			<p>
				{' '}
				<Link to="/contact">Get in touch.</Link>
			</p>
		</div>
	);
}
