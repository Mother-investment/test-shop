import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageWrapper.module.scss'
import { ReactNode, memo } from 'react'

interface PageWrapperProps {
	className?: string
	children: ReactNode
}

export const PageWrapper:React.FC<PageWrapperProps> = memo((props) => {
	const { className, children } = props

	return (
		<section className={classNames(cls.PageWrapper, {}, [className])}>
			{children}
		</section>
	)
})