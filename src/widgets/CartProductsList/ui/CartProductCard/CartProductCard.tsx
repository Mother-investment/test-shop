import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CartProductCard.module.scss'
import { memo, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { ProductCart } from 'features/Cart/module/types/cartSchema'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { cartActions } from 'features/Cart'
import { Input } from 'shared/ui/Input/Input'
import { Image } from 'shared/ui/Image/Image'
import TrashIcon from 'shared/assets/icons/TrashIcon.svg'

interface CartProductCardProps {
	className?: string
	productData: ProductCart
}

export const CartProductCard:React.FC<CartProductCardProps> = memo((props) => {
	const { className, productData } = props

	const dispatch = useAppDispatch()

	const [quantity, setQuantity] = useState<string>()

	const addProduct = () => {
		dispatch(cartActions.addProduct(productData))
	}

	const setProductQuantity = (value: string) => {
		if(+value < 100){
			setQuantity(value)
			if(0 < +value) {
				dispatch(cartActions.setProductQuantity({ ...productData, quantity: +value }))
			}
		}
	}

	const deleteProduct = () => {
		dispatch(cartActions.deleteProduct(productData))
	}

	useEffect(() => {
		setQuantity(`${productData.quantity}`)
	}, [productData.quantity, setQuantity])

	return (
		<div className={classNames(cls.CartProductCard, {}, [className])}>
			<Image className={cls.image} size='size_s' src={productData.image} alt='Фото товара' />
			<div className={cls.info}>
				<h2 className={cls.title}>{productData.title}</h2>
				<h3 className={cls.brand}>{productData.brandName}</h3>
				<h2 className={cls.price}>{Math.ceil((productData.price * productData.quantity) * 100) / 100} {productData.currency}</h2>
				<div className={cls.edit}>
					<Input
						type='number'
						min={1}
						max={99}
						value={`${quantity}`}
						onChange={setProductQuantity}
						onBlur={() => setQuantity(`${productData.quantity}`)}
					/>
					<Button className={cls.delete} onClick={deleteProduct}><TrashIcon /></Button>
				</div>
			</div>
		</div>
	)
})