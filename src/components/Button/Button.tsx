import React, { FC, MouseEvent, KeyboardEvent } from 'react';

// Styles
import cx from 'classnames';
import cn from './Button.scss';

export type ButtonVariant = 'primary' | 'neutral' | 'lightweight';

export interface ButtonProps {
	className?: string;
	testId?: string;
	tooltip?: string;
	onPress?: (event: MouseEvent | KeyboardEvent) => void;
	type?: 'submit' | 'button';
	variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
	return (
		<button
			className={cx(
				cn.button,
				getVariantClassName(props.variant),
				props.className,
			)}
			title={props.tooltip}
			data-testid={props.testId}
			onClick={(event: MouseEvent) => {
				props.onPress && props.onPress(event);
			}}
			onKeyPress={(event: KeyboardEvent) => {
				(event.which === 13 || event.which === 32) &&
					props.onPress &&
					props.onPress(event);
			}}
			type={props.type || 'button'}
		>
			{props.children}
		</button>
	);
};

const getVariantClassName = (variant?: ButtonVariant) => {
	switch (variant) {
		case 'primary':
			return cn.primary;
		case 'lightweight':
			return cn.lightweight;
		default:
			return cn.neutral;
	}
};
