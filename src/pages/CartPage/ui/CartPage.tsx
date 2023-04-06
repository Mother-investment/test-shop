import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CartPage.module.scss'
import { memo } from 'react'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { CartProductsList } from 'widgets/CartProductsList'
import { CartForm } from 'widgets/CartForm/ui/CartForm'
import { getRouteMain } from 'shared/const/router'
import { Link } from 'react-router-dom'
import { Container } from 'shared/ui/Container/Container'

interface CartPageProps {
	className?: string
}

const CartPage:React.FC<CartPageProps> = memo((props) => {
	const { className } = props

	return (
		<PageWrapper className={classNames(cls.CartPage, {}, [className])}>
			<Container main>
				<div className={cls.cartHeader}>
					<Link className={cls.link} to={getRouteMain('1')}>{'< На главную'}</Link>
				</div>
				<div className={cls.content}>
					<CartProductsList />
					<CartForm />
				</div>
			</Container>
		</PageWrapper>
	)
})

export default CartPage