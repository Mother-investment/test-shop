import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CartForm.module.scss'
import { memo } from 'react'
import { OrderForm } from 'features/Order/ui/OrderForm'
import { Button } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { cartActions } from 'features/Cart'

interface CartFormProps {
	className?: string
}

export const CartForm:React.FC<CartFormProps> = memo((props) => {
	const { className } = props

	const dispatch = useAppDispatch()

	const onClearCart = () => {
		dispatch(cartActions.clearCart())
	}

	return (
		<div className={classNames(cls.CartForm, {}, [className])}>
			<OrderForm />
			<Button onClick={onClearCart}>Очистить корзину</Button>
		</div>
	)
})