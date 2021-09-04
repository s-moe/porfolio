import React, { useState } from 'react';

export default function Home(props) {
	return (
		<>
			<div className="hero-full-container background-image-container white-text-container">
				<img
					src="/img/profileImg.jpeg"
					id="imgTag"
					alt="profile img"
					loading="lazy"
				/>
			</div>

			<div className="overlay-gradient"></div>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-7 col-md-offset-1">
						<div className="hero-full-wrapper">
							<div className="text-content">
								<h1>Sarah Moe</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
