import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Input } from '..';

afterEach(cleanup);

describe('basic input', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<Input testId={'input'} value='' onChange={() => {}} />,
		);
		expect(getByTestId('input')).toBeTruthy();
	});

	it('hides password', () => {
		const { getByTestId } = render(
			<Input
				testId={'input'}
				type='password'
				value=''
				onChange={() => {}}
			/>,
		);
		expect(getByTestId('input').getAttribute('type')).toBe('password');
	});
});
