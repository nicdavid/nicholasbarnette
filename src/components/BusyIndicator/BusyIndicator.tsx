import React, { FC } from 'react';

// Styles
import cx from 'classnames';
import cn from './BusyIndicator.scss';

interface BusyIndicatorProps {
	className?: string;
	testId?: string;
	tooltip?: string;
	onSubmit?: () => void;
	type?: 'submit' | 'button';
}

export const BusyIndicator: FC<BusyIndicatorProps> = (props) => {
	return (
		<div
			className={cn.container}
			data-testid={props.testId}
			title='Loading...'
			aria-busy={true}
		>
			<div className={cn.dot}></div>
			<div className={cn.dot}></div>
			<div className={cn.dot}></div>
		</div>
	);
};
