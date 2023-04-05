import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProductCard.module.scss'
import { memo } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch } from 'react-redux'
import { cartActions } from 'features/Cart'
import { Product } from 'entities/Products'

interface ProductCardProps {
	className?: string
	productData: Product
}

export const ProductCard:React.FC<ProductCardProps> = memo((props) => {
	const { className, productData } = props

	const dispatch = useDispatch()

	const addToCart = () => {
		dispatch(cartActions.addProduct(productData))
	}

	return (
		<div className={classNames(cls.ProductCard, {}, [className])}>
			<img src={productData.image} alt='Фото товара' />
			<h2>{productData.title}</h2>
			<h3>{productData.brandName}</h3>
			<div className={cls.price}>
				<h2>{productData.price} {productData.currency}</h2>
				<Button onClick={addToCart}>+ Добавить в корзину</Button>
			</div>
		</div>
	)
})