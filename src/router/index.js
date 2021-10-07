import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

export default function AppRouter() {
	return (
		<Router>
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<NavBar key={key} exact path={path}></NavBar>
				))}
			</Switch>

			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						exact
						path={path}
						component={() => <Component page={key} />}
					></Route>
				))}
			</Switch>
			<Footer />
		</Router>
	);
}
