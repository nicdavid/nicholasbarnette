import React, { useState, FormEvent, MouseEvent, KeyboardEvent } from 'react';
import { Form, FormElement } from '../../Form';
import { InputValidator } from '../../Input';

export default {
	component: Form,
	title: 'Form',
};

export const Basic = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Form>
			<FormElement
				id='email'
				label='Email:'
				element={{
					element: 'input',
					props: {
						type: 'text',
						placeholder: 'Email',
						value: email,
						onChange: (value) => {
							setEmail(value);
						},
					},
				}}
			/>
			<FormElement
				id='password'
				label='Password:'
				element={{
					element: 'input',
					props: {
						type: 'password',
						placeholder: 'Password',
						value: password,
						onChange: (value) => {
							setPassword(value);
						},
					},
				}}
			/>
			<FormElement
				id='theme'
				label='Theme:'
				element={{
					element: 'switch',
				}}
			/>
		</Form>
	);
};

export const withValidation = () => {
	const [email, setEmail] = useState('');
	return (
		<Form>
			<FormElement
				id='email'
				label='Email:'
				element={{
					element: 'input',
					props: {
						type: 'text',
						placeholder: 'Email',
						validator: InputValidator('email'),
						value: email,
						onChange: (value) => {
							setEmail(value);
						},
					},
				}}
			/>
		</Form>
	);
};

export const withCustomValidation = () => {
	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const submitFn = (event: MouseEvent | KeyboardEvent) => {
		console.log('Submitted form.');
	};
	return (
		<Form
			onSubmit={(event: MouseEvent | KeyboardEvent) => {
				validEmail && submitFn(event);
			}}
		>
			<FormElement
				id='email'
				label='Email:'
				element={{
					element: 'input',
					props: {
						type: 'text',
						placeholder: 'Email',
						validator: (data) => {
							const valid = InputValidator('email')(data);
							setValidEmail(valid);
							return valid;
						},
						value: email,
						onChange: (value) => {
							setEmail(value);
						},
					},
				}}
			/>
		</Form>
	);
};
