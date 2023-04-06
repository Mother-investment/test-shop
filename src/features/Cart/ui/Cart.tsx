import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Cart.module.scss'
import { memo } from 'react'
import CartIcon from 'shared/assets/icons/CartIcon.svg'
import { Link } from 'react-router-dom'
import { getRouteCart } from 'shared/const/router'
import { useSelector } from 'react-redux'
import { getTotalPrice } from '../module/selectors/getTotalPrice/getTotalPrice'
import { getCurrencyCart } from '../module/selectors/getCurrencyCart/getCurrencyCart'

interface CartProps {
	className?: string
}

export const Cart:React.FC<CartProps> = memo((props) => {
	const { className } = props

	const totalPrice = useSelector(getTotalPrice)
	const currency = useSelector(getCurrencyCart)

	return (
		<Link className={classNames(cls.Cart, {}, [className])} to={getRouteCart()}>
			<h2>{Math.ceil(totalPrice * 100) / 100} {currency}</h2>
			<CartIcon className={cls.icon} />
		</Link>
	)
})