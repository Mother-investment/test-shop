import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CartFormsBlock.module.scss'
import { memo } from 'react'

interface CartFormsBlockProps {
	className?: string
}

export const CartFormsBlock:React.FC<CartFormsBlockProps> = memo((props) => {
	const { className } = props

	return (
		<div className={classNames(cls.CartFormsBlock, {}, [className])}>

		</div>
	)
})