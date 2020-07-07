import React, { createContext, FC, useState } from 'react';
import { Switch } from '../components/Switch';

import cn from '../assets/tokens.scss';

const getThemeCookie = () => {
	const cookie = decodeURIComponent(document.cookie);
	const t = cookie.match(/theme=([a-zA-Z0-9_]*);?/);
	if (t) {
		document
			.getElementsByTagName('body')[0]
			.classList.add(t[1] || cn.light);
		return t[1] === cn.light || t[1] === cn.dark ? t[1] : cn.light;
	}
	document.cookie = `theme=${cn.light};`;
	return cn.light;
};

export const ThemeContext = createContext({
	theme: '',
	toggleTheme: (theme: string) => {},
});

interface ThemeProviderProps {
	sbOverride?: boolean; // Storybook needs to override the default theme provider behavior
	themeClass?: string;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const toggleTheme = (theme: string) => {
		// Override the body tag
		document
			.getElementsByTagName('body')[0]
			.classList.remove(theme === cn.light ? cn.light : cn.dark);
		document
			.getElementsByTagName('body')[0]
			.classList.add(theme === cn.light ? cn.dark : cn.light);

		// Save a cookie
		document.cookie = `theme=${theme === cn.light ? cn.dark : cn.light};`;

		setThemeObj({
			theme: theme === cn.light ? cn.dark : cn.light,
			toggleTheme: toggleTheme,
		});
	};

	const [themeObj, setThemeObj] = useState({
		theme: getThemeCookie(),
		toggleTheme: toggleTheme,
	});

	return (
		<ThemeContext.Provider value={themeObj}>
			{props.children}
		</ThemeContext.Provider>
	);
};

interface ThemeSwitchProps {
	className?: string;
	testId?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = (props) => {
	return (
		<ThemeContext.Consumer>
			{({ theme, toggleTheme }) => {
				const tgTheme = () => {
					toggleTheme(theme);
				};
				return (
					<Switch
						testId={props.testId}
						labels={['Light', 'Dark']}
						onSwitch={tgTheme}
						className={props.className}
						defaultChecked={getThemeCookie() === cn.dark}
						variant="light"
					/>
				);
			}}
		</ThemeContext.Consumer>
	);
};
