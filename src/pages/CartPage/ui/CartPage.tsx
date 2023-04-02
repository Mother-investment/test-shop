import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CartPage.module.scss'
import { memo } from 'react'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { CartProductsList } from 'widgets/CartProductsList'
import { CartForm } from 'widgets/CartForm/ui/CartForm'
import { getRouteMain } from 'shared/const/router'
import { Link } from 'react-router-dom'

interface CartPageProps {
	className?: string
}

const CartPage:React.FC<CartPageProps> = memo((props) => {
	const { className } = props

	return (
		<PageWrapper className={classNames(cls.CartPage, {}, [className])}>
			<Link to={getRouteMain('1')}>На главную</Link>
			<CartProductsList />
			<CartForm />
		</PageWrapper>
	)
})

export default CartPage