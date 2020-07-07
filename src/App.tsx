import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from './contexts/ThemeContext';

// Views
import { HomeView } from './views/HomeView';
import { ErrorView } from './views/ErrorView';

// Components
import { NavigationBar } from './components/NavigationBar/NavigationBar';

// Styles
import './App.scss';

const history = createBrowserHistory();

ReactDOM.render(
	<ThemeProvider>
		<NavigationBar />
		<Router history={history}>
			<Switch>
				<Route exact path="/">
					<HomeView />
				</Route>
				<Route exact path="/resume">
					<HomeView />
				</Route>
				<Route>
					<ErrorView />
				</Route>
			</Switch>
		</Router>
	</ThemeProvider>,
	document.getElementById('root'),
);
