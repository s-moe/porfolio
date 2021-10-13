import React, { useState } from 'react';

export default function Portfolio(props) {
	return (
		<div className="container">
			<div className="grid-1 dotty-img grow">
				<div className="overlay">
					<p className="dotty-description-p">
						Created and built a responsive registry{' '}
						<a
							className="portfolio-item"
							href="https://sarah-moe-project3.herokuapp.com/"
							target="_blank"
						>
							web app
						</a>{' '}
						utilizing MongoDB, Express, React, and Node.js. Users can login and
						create their own individual registry with unique listings that they
						can edit, update, and/or delete. View my repo{' '}
						<a href="https://github.com/s-moe/registry" target="_blank">
							here
						</a>
						.
					</p>
				</div>
			</div>

			<div className="grid-2 tool-img grow">
				<div className="overlay">
					<p className="toollibrary-description-p">
						Developed a community tool library with full CRUD operations
						utilizing Express with Mongoose JS, mongoDB, JSX/Node, and
						JavaScript. Users are able to browse tools by category, view
						individual show pages and reserve tools. Admin users can create,
						update, and delete tool listings.
					</p>
				</div>
			</div>

			<div className="grid-3 pizza-img grow">
				<div className="overlay">
					<p className="pizza-description-p">
						Built a web application game with HTML, CSS, and JavaScript
						utilizing DOM manipulation. The game is designed to help kids
						practice critical thinking problem solving skills and healthy
						risk-taking through an interactive pizza delivery game where players
						must decide to spend their tip money on gas to make it to the next
						stop or risk running out of gas and therefore lose the game. Game
						includes a restart function, win and lose states, and a hidden win
						function.
					</p>
				</div>
			</div>

			<div className="grid-4 noetic-img grow">
				<div className="overlay">
					<p className="noetic-description-p">
						Worked cross-functionally with a group of 4 developers and 3 UX
						designers using Jira and Figma to build a mental health community{' '}
						<a
							className="portfolio-item"
							href="https://noetic-talk-full.herokuapp.com/"
							target="_blank"
						>
							web app
						</a>{' '}
						using the MERN stack. Built frontend functionality in React based on
						team guidelines. Logged in users can access certain pages and
						capabilities including creating a post, commenting on other posts,
						and participating in group chats. Non-registered users have limited
						access to resources.
					</p>
				</div>
			</div>
		</div>
	);
}
