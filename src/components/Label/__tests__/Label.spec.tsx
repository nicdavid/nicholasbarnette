import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Label } from '..';

afterEach(cleanup);

describe('basic label', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<Label testId={'label'}>Basic Label</Label>,
		);
		expect(getByTestId('label')).toBeTruthy();
	});
});
