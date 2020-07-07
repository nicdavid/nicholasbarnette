import React, { FC, Fragment, MouseEvent, KeyboardEvent } from 'react';

// Components
import { Button } from '../Button';
import { Label } from '../Label';
import { Input, InputProps } from '../Input';
import { Switch } from '../Switch';

// Styles
import cx from 'classnames';
import cn from './Form.scss';
import { SwitchProps } from 'react-router';

interface FormProps {
	className?: string;
	testId?: string;
	onSubmit?: (event: MouseEvent | KeyboardEvent) => void;
	hideSubmit?: boolean;
}

interface FormElementProps {
	className?: string;
	testId?: string;
	id: string;
	label: string;
	element: { element: 'input' | 'switch'; props?: InputProps & SwitchProps };
}

export const FormElement: FC<FormElementProps> = (props) => {
	return (
		<Fragment>
			<Label
				id={props.id}
				testId={props.testId && `${props.testId}Label`}
			>
				{props.label}
			</Label>
			{props.element.element === 'input' && (
				<Input
					{...props.element.props}
					id={props.id}
					name={props.id}
					testId={props.testId && `${props.testId}Element`}
					value={props.element.props?.value || ''}
					onChange={props.element.props?.onChange || (() => {})}
				/>
			)}
			{props.element.element === 'switch' && (
				<Switch
					{...props.element.props}
					id={props.id}
					name={props.id}
					data-testid={props.testId && `${props.testId}Element`}
				/>
			)}
		</Fragment>
	);
};

export const Form: FC<FormProps> = (props) => {
	return (
		<form
			data-testid={props.testId}
			className={cx(cn.form, props.className)}
		>
			{props.children}
			{!props.hideSubmit && (
				<Button
					onPress={(event: MouseEvent | KeyboardEvent) => {
						event.preventDefault();
						props.onSubmit && props.onSubmit(event);
					}}
					tooltip='Submit form'
					type='submit'
					className={cn.button}
				>
					Submit
				</Button>
			)}
		</form>
	);
};
