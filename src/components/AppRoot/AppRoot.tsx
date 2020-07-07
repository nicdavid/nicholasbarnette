import React, { FC } from 'react';

// Styles
import cx from 'classnames';
import cn from './AppRoot.scss';

interface AppRootProps {
	className?: string;
	testId?: string;
}

export const AppRoot: FC<AppRootProps> = (props) => {
	return (
		<div data-testid={props.testId} className={cx(cn.app, props.className)}>
			{props.children}
		</div>
	);
};
