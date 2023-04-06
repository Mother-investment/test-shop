import { ReactNode, useMemo, useState } from 'react'
import { Theme, ThemeContext } from '../lib/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from 'shared/const/localstorage'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
	initialTheme?: Theme
    children: ReactNode
}

export const ThemeProvider:React.FC<ThemeProviderProps> = (props) => {
	const {
		initialTheme,
		children
	} = props
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

	const defaultProps = useMemo(() => ({
		theme,
		setTheme
	}), [theme])

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}