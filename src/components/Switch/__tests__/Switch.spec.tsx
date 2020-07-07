import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Switch } from '..';

afterEach(cleanup);

describe('basic switch', () => {
	it('renders', () => {
		const { getByTestId } = render(<Switch testId='switch' />);
		expect(getByTestId('switch')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByTestId } = render(
			<Switch testId={'switch'} onSwitch={handleClick} />,
		);
		fireEvent.click(getByTestId('switchInner'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles key presses', () => {
		const handlePress = jest.fn();
		const { getByTestId } = render(
			<Switch testId={'switch'} onSwitch={handlePress} />,
		);
		fireEvent.keyPress(getByTestId('switchInner'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByTestId('switchInner'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});

	it('renders labels', () => {
		const { getByTestId } = render(
			<Switch testId={'switch'} labels={['left', 'right']} />,
		);
		expect(getByTestId('switch').children.length).toBe(3);
	});
});
