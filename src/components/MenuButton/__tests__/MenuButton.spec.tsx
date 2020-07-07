import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MenuButton } from '..';

afterEach(cleanup);

describe('basic menu button', () => {
	it('renders', () => {
		const { getByTestId } = render(
			<MenuButton
				testId='menubtn'
				items={[
					{ id: 'item1', type: 'text', value: 'Item 1' },
					{ id: 'item2', type: 'text', value: 'Item 2' },
					{ id: 'item3', type: 'text', value: 'Item 3' },
				]}
				onPress={() => {}}
			>
				Menu Button
			</MenuButton>,
		);
		expect(getByTestId('menubtn')).toBeTruthy();
	});
});
