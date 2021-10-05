import React, { useState } from 'react';

export default function Resume(props) {
	const [embedURL] = useState(
		'https://drive.google.com/file/d/161ZRZ0WSB41Zb63lrJSUlUl33712nIE6/preview'
	);

	return (
		<div>
			<iframe src={embedURL} width="100%" height="1040"></iframe>
		</div>
	);
}
