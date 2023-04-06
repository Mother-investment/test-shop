import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProductCard.module.scss'
import { memo } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch } from 'react-redux'
import { cartActions } from 'features/Cart'
import { Product } from 'entities/Products'
import { Image } from 'shared/ui/Image/Image'
import { Link } from 'react-router-dom'
import { getRouteProduct } from 'shared/const/router'

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
			<Link to={getRouteProduct(productData.id)}>
				<Image src={productData.image} alt='Фото товара' />
			</Link>
			<h2 className={cls.title}>{productData.title}</h2>
			<h4 className={cls.brand}>{productData.brandName}</h4>
			<div className={cls.addCart}>
				<h2 className={cls.price}>{productData.price} {productData.currency}</h2>
				<Button
					className={cls.btn}
					theme='background'
					onClick={addToCart}
				>+ Добавить в корзину</Button>
			</div>
		</div>
	)
})