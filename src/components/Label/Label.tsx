import React, { FC } from 'react';

// Styles
import cx from 'classnames';
import cn from './Label.scss';

interface LabelProps {
	className?: string;
	testId?: string;
	id?: string;
	children: string;
}

export const Label: FC<LabelProps> = (props) => {
	return (
		<label
			htmlFor={props.id}
			data-testid={props.testId}
			className={cx(cn.label, props.className)}
		>
			{props.children}
		</label>
	);
};
