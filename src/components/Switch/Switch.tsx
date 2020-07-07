import React, { FC, useState } from 'react';

// Components
import { Label } from '../Label';

// Styles
import cx from 'classnames';
import cn from './Switch.scss';

interface SwitchProps {
	className?: string;
	testId?: string;
	id?: string;
	name?: string;
	onSwitch?: () => void;
	labels?: [string, string];
	defaultChecked?: boolean;
	variant?: 'light' | 'dark';
}

export const Switch: FC<SwitchProps> = (props) => {
	const [checked, setChecked] = useState(props.defaultChecked || false);
	return (
		<div
			data-testid={props.testId}
			className={cx(
				cn.container,
				props.variant === 'light' && cn.light,
				props.className,
			)}
		>
			{props.labels && (
				<Label id={props.id} className={cn.label}>
					{props.labels[0]}
				</Label>
			)}
			<label
				data-testid={props.testId && `${props.testId}Inner`}
				className={cn.switch}
				tabIndex={0}
				onKeyPress={(evt) => {
					if (evt.which === 13 || evt.which === 32) {
						props.onSwitch && props.onSwitch();
						setChecked(!checked);
					}
				}}
			>
				<input
					checked={checked}
					className={cn.input}
					type="checkbox"
					onChange={() => {
						setChecked(!checked);
					}}
					onClick={() => {
						props.onSwitch && props.onSwitch();
					}}
					id={props.id}
					name={props.name}
				/>
				<span className={cx(cn.slider, cn.round)}></span>
			</label>
			{props.labels && (
				<Label id={props.id} className={cn.label}>
					{props.labels[1]}
				</Label>
			)}
		</div>
	);
};
