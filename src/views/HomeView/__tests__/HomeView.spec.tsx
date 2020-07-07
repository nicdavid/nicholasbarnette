import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Router } from 'react-router';
import { HomeView } from '..';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

afterEach(cleanup);

describe('basic home view', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<Router history={history}>
				<HomeView testId="homeView" />
			</Router>,
		);
		expect(getByTestId('homeView')).toBeTruthy();
	});
});
