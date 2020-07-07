import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { ThemeSwitch } from '../ThemeContext';

afterEach(cleanup);

describe('theme context', () => {
	it('renders', () => {
		const { getByTestId } = render(<ThemeSwitch testId='switch' />);
		expect(getByTestId('switch')).toBeTruthy();
	});

	it('renders labels', () => {
		const { getByTestId } = render(<ThemeSwitch testId={'switch'} />);
		expect(getByTestId('switch').children.length).toBe(3);
	});
});
