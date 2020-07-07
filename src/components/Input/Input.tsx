import React, { FC, useState } from 'react';

export { InputValidator } from './InputValidators';

// Styles
import cx from 'classnames';
import cn from './Input.scss';

export interface InputProps {
	className?: string;
	testId?: string;
	placeholder?: string;
	type?: 'text' | 'password';
	name?: string;
	id?: string;
	value: string;
	validator?: (data: string) => boolean;
	onChange: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
	const [valid, setValid] = useState(true);

	return (
		<input
			data-testid={props.testId}
			className={cx(cn.input, !valid && cn.invalid, props.className)}
			placeholder={props.placeholder}
			type={props.type || 'text'}
			name={props.name}
			id={props.id}
			value={props.value}
			onChange={(evt) => {
				props.onChange && props.onChange(evt.target.value);
				props.validator && setValid(props.validator(props.value));
			}}
			onBlur={() => {
				props.validator && setValid(props.validator(props.value));
			}}
		/>
	);
};
