import React from 'react';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Portfolio,
		key: 'Portfolio',
		path: '/portfolio'
	},
	{
		Component: Resume,
		key: 'Resume',
		path: '/resume'
	},
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	}
];

export default routes;
