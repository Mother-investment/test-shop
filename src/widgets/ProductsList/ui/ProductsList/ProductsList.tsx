import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProductsList.module.scss'
import { memo, useEffect, useMemo } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { fetchProductsData, getProductsData, getProductsTotalPages } from 'entities/Products'
import { Loader } from 'shared/ui/Loader/Loader'
import { ProductCard } from '../ProductCard/ProductCard'
import { getActiveBrands } from 'features/BrandsFilter'
import { Pagination } from 'features/Pagination'
import { useParams } from 'react-router-dom'
import { getOrderOk, orderActions } from 'features/Order'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { cartActions } from 'features/Cart'

interface ProductsListProps {
	className?: string
}

export const ProductsList:React.FC<ProductsListProps> = memo((props) => {
	const { className } = props

	const dispatch = useAppDispatch()
	const productsData = useSelector(getProductsData)
	const activeBrands = useSelector(getActiveBrands)
	const totalPages = useSelector(getProductsTotalPages)
	const orderOk = useSelector(getOrderOk)
	const page = useParams<{ number: string }>()

	useInitialEffect(() => {
		if(orderOk) {
			dispatch(cartActions.clearCart())
			dispatch(orderActions.clearOrder())
		}
	})

	useEffect(() => {
		if(activeBrands.length !== 0) {
			dispatch(fetchProductsData({
				brandId: activeBrands.join('|'),
				limit: '6',
				page: page.number
			}))
		}else {
			dispatch(fetchProductsData({
				limit: '6',
				page: page.number
			}))
		}
	},[activeBrands, page.number])

	if(!productsData) {
		return <Loader />
	}

	return (
		<div className={classNames(cls.ProductsList, {}, [className])}>
			{productsData.map(product => (
				<ProductCard
					key={product.id}
					productData={product}
				/>
			))}
			<Pagination currentPage={Number(page.number)} totalPages={totalPages} />
		</div>
	)
})