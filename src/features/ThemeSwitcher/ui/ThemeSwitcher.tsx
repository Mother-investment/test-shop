import { useTheme } from 'app/providers/ThemeProvider'
import cls from './ThemeSwitcher.module.scss'
import Icon from 'shared/assets/icons/ThemeIcon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher:React.FC<ThemeSwitcherProps> = (props) => {
	const { className } = props
	const { theme, toggleTheme } = useTheme()
	return (
		<Button theme='clear' className={classNames(cls.container, {}, [className])} onClick={toggleTheme}>
			<Icon className={classNames(cls.ThemeSwitcher, {}, [])} />
		</Button>
	)
}