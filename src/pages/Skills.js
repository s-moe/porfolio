import React from 'react';

export default function Skills() {
	return (
		<div className="what-I-can-do">
			<div className="column">
				<h3 className="title">LANGUAGES</h3>
				<li>JavaScript</li>
				<li>Python</li>
				<li>SQL</li>
				<li>CSS</li>
				<li>HTML</li>
				<li>JSX</li>
			</div>

			<div className="column">
				<h3 className="title">FRONTEND FRAMEWORKS</h3>
				<li>React</li>
				<li>Vue</li>
				<li>Bootstrap</li>
			</div>

			<div className="column">
				<h3 className="title">BACKEND FRAMEWORKS</h3>
				<li>Express</li>
				<li>Django</li>
				<li>Node.js</li>
			</div>

			<div className="column">
				<div className="databases">
					<h3 className="title">DATABASES</h3>
					<li>MongoDB</li>
					<li>MySQL</li>
					<li>PostgreSQL</li>
				</div>
			</div>

			<div className="column">
				<h3 className="title">SOFTWARE</h3>
				<li>Jira</li>
				<li>Slack</li>
				<li>Trello</li>
				<li>GSuite</li>
				<li>Microsoft Office</li>
				<li>Asana</li>
			</div>

			<div className="column">
				<h3 className="title">NON-TECHNICAL</h3>
				<li>Creative problem solving</li>
				<li>Award-winning communication (that's right, I won an award)</li>
				<li>Detail-oriented</li>
				<li>Ingenuity</li>
				<li>Curiosity</li>
				<li>Dedicated team member</li>
				<li>Established leader</li>
			</div>
		</div>
	);
}
