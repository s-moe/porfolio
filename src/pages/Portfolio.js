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
				<p className="dotty-description-p">
					Created and built a responsive registry web app utilizing MongoDB,
					Express, React, and Node.js. Users can login and create their own
					individual registry with unique listings that they can edit, update,
					and/or delete. View my repo{' '}
					<a href="https://github.com/s-moe/registry">here</a>.
				</p>
			</div>

			<div className="grid-2 grow">
				<a className="portfolio-item" href="#!">
					<img
						className="img-fluid"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5ERB6qWA93JncvbH1m5igySrZ3i3n1UmCSqGaacYX15_gT3PvS6LaOraJ04yEQ99-80&usqp=CAU"
						alt="Image of various tools"
					/>
				</a>
				<p className="toollibrary-description-p">
					Developed a community tool library with full CRUD operations utilizing
					Express with Mongoose JS, mongoDB, JSX/Node, and JavaScript. Users are
					able to browse tools by category, view individual show pages and
					reserve tools. Admin users can create, update, and delete tool
					listings.
				</p>
			</div>

			<div className="grid-3 grow">
				<a className="portfolio-item" href="#!">
					<img
						className="img-fluid"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3O4ZfPxVCuawywlFacJm_ahIfp-zUm-e4wA&usqp=CAU"
						alt="Image of pepporoni pizza"
					/>
				</a>
				<p className="pizza-description-p">
					Built a web application game with HTML, CSS, and JavaScript utilizing
					DOM manipulation. The game is designed to help kids practice critical
					thinking problem solving skills and healthy risk-taking through an
					interactive pizza delivery game where players must decide to spend
					their tip money on gas to make it to the next stop or risk running out
					of gas and therefore lose the game. Game includes a restart function,
					win and lose states, and a hidden win function.
				</p>
			</div>

			<div className="grid-4 grow">
				<a
					className="portfolio-item"
					href="https://noetic-talk-full.herokuapp.com/"
					target="_blank"
				>
					<img
						className="img-fluid"
						src="/img/NoeticTalkImg.png"
						alt="Image of home page for Noetic Talk app with two recent posts on depression"
					/>
				</a>
				<p className="noetic-description-p">
					Worked cross-functionally with a group of 4 developers and 3 UX
					designers using Jira and Figma to build a mental health community web
					app using the MERN stack. Built frontend functionality in React based
					on team guidelines. Logged in users can access certain pages and
					capabilities including creating a post, commenting on other posts, and
					participating in group chats. Non-registered users have limited access
					to resources.
				</p>
			</div>
		</div>
	);
}
