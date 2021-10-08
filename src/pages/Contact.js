import React from 'react';
import emailjs from 'emailjs-com';
import ThankYou from './ThankYou';
import { useHistory } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

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
		<div
			className="ContactPage-container col-xxl-8 px-4 py-5"
			id="contact-page"
		>
			<div className="flex-child-img contact-img-div">
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
					<div className="mb-3 text-center">
						<button
							className="w-50 btn btn-primary"
							id="submit-button"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>

				<div className="col-lg-12 direct-contact">
					<h5 className="display-7 lh-1 mb-3 sarah-email">
						sarah@sarahmoe.com
					</h5>
					<a href="https://github.com/s-moe" target="_blank">
						<FaGithub
							className="github-icon-contact"
							size="1.5em"
							color="purple"
						/>
					</a>
					<a href="https://www.linkedin.com/in/samoe/" target="_blank">
						<FaLinkedin
							className="linkedIn-icon-contact"
							size="1.5em"
							color="dark-blue"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
