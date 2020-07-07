import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { BusyIndicator } from '..';

afterEach(cleanup);

describe('basic busy indicator', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<BusyIndicator testId='busyIndicator' />,
		);
		expect(getByTestId('busyIndicator')).toBeTruthy();
	});
});
