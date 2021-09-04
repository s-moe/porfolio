import React, { useState } from 'react';

export default function Portfolio(props) {
	return (
		<section className="content-section" id="portfolio">
			<div className="container px-4 px-lg-5">
				<div className="content-section-heading text-center">
					<h3 className="text-secondary mb-0">Portfolio</h3>
					<h2 className="mb-5">Recent Projects</h2>
				</div>
				<div className="row gx-0">
					<div className="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div className="caption">
								<div className="caption-content">
									<div className="h2">Dotty</div>
									<p className="mb-0">
										A registry for non-traditional celebrations. Built using...
									</p>
								</div>
							</div>
							<img
								className="img-fluid"
								src="assets/img/portfolio-1.jpg"
								alt="..."
							/>
						</a>
					</div>
					<div className="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div className="caption">
								<div className="caption-content">
									<div className="h2">Project 4</div>
									<p className="mb-0">...Built using...</p>
								</div>
							</div>
							<img
								className="img-fluid"
								src="assets/img/portfolio-2.jpg"
								alt="..."
							/>
						</a>
					</div>
					<div className="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div className="caption">
								<div className="caption-content">
									<div className="h2">Tool Library</div>
									<p className="mb-0">...built using...</p>
								</div>
							</div>
							<img
								className="img-fluid"
								src="assets/img/portfolio-3.jpg"
								alt="..."
							/>
						</a>
					</div>
					<div className="col-lg-6">
						<a className="portfolio-item" href="#!">
							<div className="caption">
								<div className="caption-content">
									<div className="h2">Bookmarks</div>
									<p className="mb-0">...built using</p>
								</div>
							</div>
							<img
								className="img-fluid"
								src="assets/img/portfolio-4.jpg"
								alt="..."
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
