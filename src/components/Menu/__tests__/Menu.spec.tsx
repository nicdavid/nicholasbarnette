import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Menu } from '..';

afterEach(cleanup);

describe('basic menu', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<Menu
				testId='menu'
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
			></Menu>,
		);
		expect(getByTestId('menu')).toBeTruthy();
	});

	it('handles clicks', () => {
		const handleClick = jest.fn();
		const { getByTestId } = render(
			<Menu
				testId='menu'
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={handleClick}
			></Menu>,
		);
		fireEvent.click(getByTestId('menuItem-item1'));
		expect(handleClick).toHaveBeenCalled();
	});

	it('handles key presses', () => {
		const handlePress = jest.fn();
		const { getByTestId } = render(
			<Menu
				testId='menu'
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={handlePress}
			></Menu>,
		);
		fireEvent.keyPress(getByTestId('menuItem-item1'), {
			key: 'Enter',
			code: 13,
			charCode: 13,
		});
		fireEvent.keyPress(getByTestId('menuItem-item1'), {
			key: 'Space',
			code: 32,
			charCode: 32,
		});
		expect(handlePress.mock.calls.length).toBe(2);
	});
});
