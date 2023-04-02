import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CartProductCard.module.scss'
import { memo } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { ProductCart } from 'features/Cart/module/types/cartSchema'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { cartActions } from 'features/Cart'

interface CartProductCardProps {
	className?: string
	productData: ProductCart
}

export const CartProductCard:React.FC<CartProductCardProps> = memo((props) => {
	const { className, productData } = props

	const dispatch = useAppDispatch()

	const addProduct = () => {
		dispatch(cartActions.addProduct(productData))
	}

	const reduceProduct = () => {
		if(productData.quantity > 1) {
			dispatch(cartActions.reduceProduct(productData))
		}
	}

	const deleteProduct = () => {
		dispatch(cartActions.deleteProduct(productData))
	}

	return (
		<div className={classNames(cls.CartProductCard, {}, [className])}>
			<img src={productData.image} alt='Фото товара' />
			<h1>{productData.title}</h1>
			<div className={cls.counter}>
				<Button onClick={reduceProduct}>-</Button>
				<h2>{productData.quantity}</h2>
				<Button onClick={addProduct}>+</Button>
			</div>
			<h1>{productData.price}</h1>
			<Button onClick={deleteProduct}>x</Button>
		</div>
	)
})