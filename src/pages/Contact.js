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
					<form className="contact-form row g-3">
						<h1 className="display-5 fw-bold lh-1 mb-3">Contact Me!</h1>
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
								required
							/>
							<label htmlFor="floatingEmail">Email</label>
						</div>

						<div className="mb-3 pl-2 form-floating col-md-12">
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
						<div className="mb-1">
							<button className="w-100 btn btn-primary mb-3" type="submit">
								Submit
							</button>
						</div>

						<div className="col-lg-6">
							<h5 className="display-7 lh-1 mb-3">Email: sarah@sarahmoe.com</h5>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
