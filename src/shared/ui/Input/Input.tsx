import { forwardRef } from 'react'
import { InputHTMLAttributes, memo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'placeholder' | 'min' | 'max' | 'onBlur'>

interface InputProps extends HTMLInputProps{
	className?: string
	value?: string
	onChange?: (value: string) => void
	onBlur?: () => void
	onClick?: () => void
	type?: string
	readonly?: boolean
	placeholder?: string
	searchOffForSelect?: boolean
	register?: React.InputHTMLAttributes<HTMLInputElement>
	min?: number
	max?: number
}

export const Input = memo(forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, value, onChange, onBlur, onClick, type='text', readonly, searchOffForSelect, register, placeholder, min, max } = props

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(onChange) {
			onChange(e.target.value)
		}
	}

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.searchOffForSelect]: searchOffForSelect
	}

	if(type === 'number') {

		const handleIncrement = () => {
			if(onChange && value) {
				if(max) {
					onChange(`${+value + 1 > max ? max : +value + 1}`)
				}else {
					onChange(`${+value + 1}`)
				}
			}
		}

		const handleDecrement = () => {
			if(onChange && value) {
				if(min) {
					onChange(`${+value - 1 < min ? min : +value - 1}`)
				}else {
					onChange(`${+value - 1}`)
				}
			}
		}

		return (
			<div className={classNames(cls.Input, {}, [className, cls.inputNum])}>
				<button className={cls.btn} onClick={handleDecrement}>-</button>
				<input
					className={classNames(cls.inputField, mods, [])}
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					readOnly={readonly || searchOffForSelect}
					onClick={onClick}
					onBlur={onBlur}
					placeholder={placeholder}
					min={min}
					max={max}
					{...register}
				/>
				<button className={cls.btn} onClick={handleIncrement}>+</button>
			</div>
		)
	}

	return (
		<input
			className={classNames(cls.Input, mods, [className])}
			ref={ref}
			type={type}
			value={value}
			onChange={onChangeHandler}
			readOnly={readonly || searchOffForSelect}
			onClick={onClick}
			onBlur={onBlur}
			placeholder={placeholder}
			min={min}
			max={max}
			{...register}
		/>
	)
}))