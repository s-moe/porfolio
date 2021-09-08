import React, { useState, useEffect } from 'react';

export default function Contact(props) {
	const [guest, setGuest] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = e => {
		setGuest({ ...guest, [e.target.name]: e.target.value });
	};

	return (
		<div className="HomePage container col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<form lassName="contact-form row">
						<div className="mb-3 pl-2  form-floating col-md-6">
							<input
								type="text"
								name="name"
								value={guest.name}
								onChange={handleChange}
								className="form-control"
								id="floatingName"
								placeholder="Name"
							/>
							<label htmlFor="floatingName">Name</label>
						</div>


						<div className="mb-3 pl-2 form-floating col-md-6">
							<input
								type="text"
								name="email"
								value={guest.email}
								onChange={handleChange}
								className="form-control"
								id="floatingEmail"
								placeholder="Email"
							/>
							<label htmlFor="floatingEmail">Email</label>
						</div>
						
						<div className="mb-3 pl-2 form-floating col-md-6">
							<input
								type="text"
								name="message"
								value={guest.message}
								onChange={handleChange}
								className="form-control"
								id="floatingMessage"
								placeholder="Message"
							/>
							<label htmlFor="floatingMessage">Message</label>
						</div>
					</form>
				</div>

				<div className="col-lg-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">Contact</h1>
					<h3 className="display-7 fw-bold lh-1 mb-3">
						Email: sarah@sarahmoe.com
					</h3>
					<h3>Phone: (425) 923 - 9939</h3>
	)
}
