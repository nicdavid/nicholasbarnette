import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Router } from 'react-router';
import { ErrorView } from '..';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

afterEach(cleanup);

describe('basic error view', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<Router history={history}>
				<ErrorView testId="errorView" />
			</Router>,
		);
		expect(getByTestId('errorView')).toBeTruthy();
	});
});
