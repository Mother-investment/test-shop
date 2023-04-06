import { ButtonHTMLAttributes } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export type ButtonTheme = 'clear' | 'outline' | 'background'

export type ButtonColor = 'primary' | 'attn'

type ButtonType = 'submit' | 'reset' | 'button' | undefined

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string
	theme?: ButtonTheme
	color?: ButtonColor
	square?: boolean
	disabled?: boolean
	type?: ButtonType
}

export const Button:React.FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		color = 'primary',
		theme = 'clear',
		square,
		type,
		disabled,
		...otherProps
	} = props

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled
	}

	return (
		<button
			className={classNames(cls.Button, mods, [className, cls[theme], cls[color]])}
			disabled={disabled}
			type={type}
			{...otherProps}
		>
			{children}
		</button>
	)
}