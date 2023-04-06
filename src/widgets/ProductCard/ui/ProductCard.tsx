import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProductCard.module.scss'
import { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Image } from 'shared/ui/Image/Image'
import { Loader } from 'shared/ui/Loader/Loader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchProductData, getProductData } from 'entities/Product'
import { Button } from 'shared/ui/Button/Button'
import { cartActions } from 'features/Cart'
import { Container } from 'shared/ui/Container/Container'

interface ProductCardProps {
	className?: string
}

export const ProductCard:React.FC<ProductCardProps> = memo((props) => {
	const { className } = props

	const dispatch = useAppDispatch()
	const param = useParams<string>()

	const product = useSelector(getProductData)

	useEffect(() => {
		if(param.id) {
			dispatch(fetchProductData({ id: param.id }))
		}
	}, [dispatch, param.id])

	const addToCart = () => {
		if(product) {
			dispatch(cartActions.addProduct(product))
		}
	}

	if(!product) {
		return <Loader />
	}

	return (
		<div className={classNames(cls.ProductCard, {}, [className])}>
			<Container alignItems='ai_center'>
				<div className={cls.main}>
					<Image src={product.image} size='size_l' alt='Фото товара'/>
					<div className={cls.info}>
						<h2 className={cls.title}>{product.title}</h2>
						<h4 className={cls.brand}>{product.brandName}</h4>
						<h2 className={cls.price}>{product.price} {product.currency}</h2>
						<Button
							className={cls.btn}
							theme='background'
							onClick={addToCart}
						>+ Добавить в корзину</Button>
					</div>
				</div>
				<div className={cls.description}><p>{product.description}</p></div>
			</Container>
		</div>
	)
})
