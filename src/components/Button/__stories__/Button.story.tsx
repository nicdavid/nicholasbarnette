import React, { Fragment } from 'react';
import { Button } from '../../Button';

export default {
	component: Button,
	title: 'Button',
};

export const Basic = () => {
	return <Button>Basic Button</Button>;
};

export const Design = () => {
	return (
		<div
			style={{
				display: 'grid',
				gridGap: '1rem',
				gridTemplateColumns: '1fr',
				gridAutoRows: 'auto',
				justifyItems: 'flex-start',
			}}
		>
			<Button>Neutral Button</Button>
			<Button variant={'primary'}>Primary Button</Button>
			<Button variant={'lightweight'}>Neutral Light Button</Button>
		</div>
	);
};
