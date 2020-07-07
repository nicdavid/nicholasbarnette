import React, { Fragment } from 'react';
import { Switch } from '../Switch';

export default {
	component: Switch,
	title: 'Switch',
};

export const Basic = () => {
	return <Switch />;
};

export const withLabels = () => {
	return <Switch labels={['Left', 'Right']} />;
};

export const Design = () => {
	return (
		<Fragment>
			<Switch labels={['Left', 'Right']} />
			<div
				style={{
					backgroundColor: 'var(--navigation-bg)',
					padding: '0.5rem',
				}}
			>
				<Switch labels={['Left', 'Right']} variant="light" />
			</div>
		</Fragment>
	);
};
