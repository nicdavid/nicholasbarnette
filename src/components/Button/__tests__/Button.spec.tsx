import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Button } from '..';

afterEach(cleanup);

describe('basic button', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<Button testId={'btn'}>Basic Button</Button>,
		);
		expect(getByTestId('btn')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByTestId } = render(
			<Button testId={'btn'} onPress={handleClick}>
				Basic Button
			</Button>,
		);
		fireEvent.click(getByTestId('btn'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles key presses', () => {
		const handlePress = jest.fn();
		const { getByTestId } = render(
			<Button testId={'btn'} onPress={handlePress}>
				Basic Button
			</Button>,
		);
		fireEvent.keyPress(getByTestId('btn'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByTestId('btn'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});
});
