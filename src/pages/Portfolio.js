import React, { useState } from 'react';

export default function Portfolio(props) {
	return (
		<div className="container">
			<div className="grid-1 grow">
				<a
					className="portfolio-item"
					href="https://sarah-moe-project3.herokuapp.com/"
					target="_blank"
				>
					<img
						className="img-fluid"
						src="/img/DottyImg.png"
						alt="image of registry application"
					/>
				</a>
			</div>

			<div className="grid-2">
				<a className="portfolio-item" href="#!">
					<img
						className="img-fluid"
						src="assets/img/portfolio-2.jpg"
						alt="..."
					/>
				</a>
			</div>

			<div className="grid-3">
				<a className="portfolio-item" href="#!">
					<img
						className="img-fluid"
						src="assets/img/portfolio-3.jpg"
						alt="..."
					/>
				</a>
			</div>

			<div className="grid-4">
				<a className="portfolio-item" href="#!">
					<img
						className="img-fluid"
						src="assets/img/portfolio-4.jpg"
						alt="..."
					/>
				</a>
			</div>
		</div>
	);
}
