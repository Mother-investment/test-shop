import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Checkbox.module.scss'
import { memo } from 'react'

interface CheckboxProps {
	className?: string
	title?: string
	checked: boolean
	id: string
	name: string
	handleChange: (category: string) => void
}

export const Checkbox:React.FC<CheckboxProps> = memo((props) => {
	const { className, title, checked, id, name, handleChange } = props

	return (
		<div className={classNames(cls.Checkbox, {}, [className])}>
			<input
				id={id}
				type='checkbox'
				name={name}
				onChange={() => handleChange(id)}
				checked={checked}
			/>
			<label htmlFor={id}>{title}</label>
		</div>
	)
})