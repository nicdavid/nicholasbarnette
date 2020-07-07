import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Components
import { AppRoot } from '../../components/AppRoot';
import { Button } from '../../components/Button';

// Styles
import cx from 'classnames';
import cn from './ErrorView.scss';

interface ErrorViewProps {
	className?: string;
	testId?: string;
}

export const ErrorView: FC<ErrorViewProps> = (props) => {
	return (
		<AppRoot
			className={cx(cn.container, props.className)}
			testId={props.testId}
		>
			<h1 className={cn.header}>404</h1>
			<h3 className={cn.subheader}>
				Sorry we couldn't find the page you are looking for.
			</h3>
			<Link to="/" tabIndex={-1}>
				<Button variant="primary">Go Back</Button>
			</Link>
		</AppRoot>
	);
};
