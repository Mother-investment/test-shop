import cls from './Container.module.scss'
import { memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface ContainerProps {
	className?: string
	children: ReactNode
	alignItems?: 'ai_normal' | 'ai_center' | 'ai_flex-start' | 'ai_flex-end'
	justifyContent?: 'jc_normal' | 'jc_center' | 'jc_flex-start' | 'jc_flex-end' | 'jc_space-between'
	direction?: 'd_row' | 'd_column'
	main?: boolean
}

export const Container:React.FC<ContainerProps> = memo((props) => {
	const {
		className,
		children,
		alignItems = 'ai_normal',
		justifyContent = 'jc_normal',
		direction = 'd_column',
		main
	} = props

	return (
		<div className={classNames(cls.Container, { [cls.main]: main }, [cls[alignItems], cls[justifyContent], cls[direction], className])}>
			{children}
		</div>
	)
})