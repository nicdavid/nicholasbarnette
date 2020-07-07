import React, { FC, useState, useEffect, useRef } from 'react';

// Components
import { Menu, MenuItem } from '../Menu';

// Styles
import cx from 'classnames';
import cn from './MenuButton.scss';
import { Button, ButtonVariant } from '../Button';
import { GenerateMenuId } from '../Menu';

interface MenuButtonProps {
	className?: string;
	testId?: string;
	items?: MenuItem[];
	tooltip?: string;
	onPress?: (id: string) => void;
	variant?: ButtonVariant;
}

export const MenuButton: FC<MenuButtonProps> = (props) => {
	const [menuId, setMenuId] = useState(GenerateMenuId);
	const [isOpen, setIsOpen] = useState(false);
	const btnRef = useRef<HTMLDivElement>(null);

	const checkClick = (event: any) => {
		let shouldClose = true;
		for (let p of event.path) {
			if (p && p.getAttribute && p.getAttribute('data-menuid')) {
				shouldClose =
					shouldClose && !(p.getAttribute('data-menuid') === menuId);
				if (!shouldClose) break;
			}
		}
		shouldClose && setIsOpen(false);
	};

	useEffect(() => {
		window.addEventListener('click', checkClick);
		return () => {
			window.removeEventListener('click', checkClick);
		};
	}, []);

	return (
		<div
			ref={btnRef}
			className={cx(cn.container, props.className)}
			data-menuid={menuId}
			data-testid={props.testId}
		>
			<Button
				className={cn.button}
				tooltip={props.tooltip}
				data-testid={props.testId}
				onPress={() => {
					setIsOpen(!isOpen);
				}}
				variant={props.variant}
			>
				{props.children}
			</Button>
			<Menu
				originRef={btnRef}
				items={props.items}
				isOpen={isOpen}
				onPress={props.onPress}
				className={cn.menu}
				menuId={menuId}
			></Menu>
		</div>
	);
};
