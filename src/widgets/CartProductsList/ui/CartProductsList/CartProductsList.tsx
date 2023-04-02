import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CartProductsList.module.scss'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getProductsCart } from 'features/Cart'
import { CartProductCard } from '../CartProductCard/CartProductCard'
import { Loader } from 'shared/ui/Loader/Loader'

interface CartProductsListProps {
	className?: string
}

export const CartProductsList:React.FC<CartProductsListProps> = memo((props) => {
	const { className } = props

	const productsCart = useSelector(getProductsCart)

	if(!productsCart) {
		return <Loader />
	}
	return (
		<div className={classNames(cls.CartProductsList, {}, [className])}>
			{productsCart.map(product => <CartProductCard key={product.id} productData={product}/>)}
		</div>
	)
})