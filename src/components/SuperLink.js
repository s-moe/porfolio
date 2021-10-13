import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SuperLink(props) {
	let history = useHistory();

	const handleClick = e => {
		e.preventDefault();
		history.push(props.to);
	};

	return (
		<a
			className={props.classes ? props.classes.join(' ') : ''}
			href={props.to || ''}
			onClick={handleClick}
			data-bs-toggle={props.toggle || ''}
			data-bs-target={props.target || ''}
		>
			{props.children}
		</a>
	);
}
