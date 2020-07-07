import React, { FC, Ref, useEffect, useState, RefObject, useRef } from 'react';

// Styles
import cx from 'classnames';
import cn from './Menu.scss';

export interface MenuItem {
	type: 'text' | 'divider';
	id?: string;
	value?: string;
	hide?: boolean;
}

interface MenuProps {
	className?: string;
	testId?: string;
	items?: MenuItem[];
	onPress?: (id: string) => void;
	isOpen?: boolean;
	originRef?: RefObject<HTMLElement>;
	menuId?: string;
}

export const GenerateMenuId = () => {
	let id = '';
	for (let i = 0; i < 10; i++) {
		id += Math.floor(Math.random() * 16)
			.toString(16)
			.toUpperCase();
	}
	return id;
};

export const Menu: FC<MenuProps> = (props) => {
	const [position, setPosition] = useState({
		top: -1,
		right: -1,
		bottom: -1,
		left: -1,
	});

	useEffect(() => {
		if (props.originRef) {
			const bounds = props.originRef.current?.getBoundingClientRect()!;
			setPosition({
				top:
					bounds.top <= window.screen.height / 2
						? bounds.bottom - bounds.top
						: -1,
				right: bounds.left > window.screen.width / 2 ? 0 : -1,
				bottom:
					bounds.top > window.screen.height / 2
						? bounds.bottom - bounds.top
						: -1,
				left: bounds.left <= window.screen.width / 2 ? 0 : -1,
			});
		}
	}, [props.originRef]);

	return (
		<ul
			data-testid={props.testId}
			className={cx(cn.menu, !props.isOpen && cn.closed, props.className)}
			data-menuid={props.menuId}
			style={{
				top: position.top !== -1 ? position.top : undefined,
				right: position.right !== -1 ? position.right : undefined,
				bottom: position.bottom !== -1 ? position.bottom : undefined,
				left: position.left !== -1 ? position.left : undefined,
			}}
		>
			{props.items?.map((item, idx) => {
				switch (item.type) {
					case 'text':
						return (
							item.value &&
							!item.hide && (
								<li
									className={cn.item}
									tabIndex={1}
									key={item.id || idx}
									data-testid={
										props.testId &&
										`${props.testId}Item-${item.id || idx}`
									}
									onClick={() => {
										props.onPress &&
											props.onPress(item.id || `${idx}`);
									}}
									onKeyPress={(event) => {
										(event.which === 13 ||
											event.which === 32) &&
											props.onPress &&
											props.onPress(item.id || `${idx}`);
									}}
								>
									{item.value}
								</li>
							)
						);
					case 'divider':
						return (
							<div
								className={cn.divider}
								data-testid={
									props.testId &&
									`${props.testId}Divider-${idx}`
								}
							></div>
						);
					default:
						return;
				}
			})}
		</ul>
	);
};
