import React from 'react';
import emailjs from 'emailjs-com';
import ThankYou from './ThankYou';
import { useHistory } from 'react-router-dom';

export default function Contact() {
	const history = useHistory();
	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'contact_service',
				'contact_form',
				e.target,
				'user_G82CO16402WG1xtpLLb2i'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		e.target.reset();
		history.push('/thankyou');
	};

	return (
		<div className="ContactPage-container" id="contact-page">
			<div>
				<img
					className="contact-img"
					src="/img/SarahMoeContactImg.jpg"
					alt="image of Sarah Moe"
				/>
			</div>

			<div className="flex-child-div">
				<form className="contact-form row g-3" onSubmit={sendEmail}>
					<h3>Get in touch.</h3>
					<div className="mb-3 pl-2  form-floating col-md-12">
						<input
							type="text"
							name="user_name"
							className="form-control"
							id="floatingName"
							placeholder="Name"
							activeClassName="activeInput"
						/>
						<label htmlFor="floatingName">Name</label>
					</div>

					<div className="mb-3 pl-2 form-floating col-md-12">
						<input
							type="text"
							name="user_email"
							className="form-control"
							id="floatingEmail"
							placeholder="Email"
							required
							activeClassName="activeInput"
						/>
						<label htmlFor="floatingEmail">Email</label>
					</div>

					<div className="mb-2 pl-2 form-floating col-md-12">
						<input
							type="text"
							name="message"
							className="form-control"
							id="floatingMessage"
							placeholder="Message"
							style={{ height: '100px' }}
							activeClassName="activeInput"
						/>
						<label htmlFor="floatingMessage">Message</label>
					</div>
					<div className="mb-3">
						<button
							className="btn btn-primary"
							id="submit-button"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>

				<div className="direct-contact">
					<h5 className="sarah-email">sarah@sarahmoe.com</h5>
				</div>
			</div>
		</div>
	);
}
