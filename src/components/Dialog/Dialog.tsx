import React, { FC, CSSProperties } from 'react';

// Components
import { Button, ButtonProps } from '../Button';

// Styles
import cx from 'classnames';
import cn from './Dialog.scss';

interface DialogProps {
	className?: string;
	testId?: string;
	title: string;
	showDialog?: boolean;
	closeButton?: { text: string; props: ButtonProps };
	submitButton?: { text: string; props: ButtonProps };
	maxWidth?: string;
}

export const Dialog: FC<DialogProps> = (props) => {
	return (
		<div
			className={cn.overlay}
			style={{
				display: props.showDialog ? 'flex' : 'none',
			}}
		>
			<div
				className={cx(cn.dialog, props.className)}
				data-testid={props.testId}
				style={{ maxWidth: props.maxWidth }}
			>
				<header className={cn.header}>{props.title}</header>
				<div className={cn.body}>{props.children}</div>
				<footer className={cn.footer}>
					{props.submitButton && (
						<Button {...props.submitButton.props}>
							{props.submitButton?.text}
						</Button>
					)}
					<Button {...props.closeButton?.props}>
						{props.closeButton?.text || 'Close'}
					</Button>
				</footer>
			</div>
		</div>
	);
};
