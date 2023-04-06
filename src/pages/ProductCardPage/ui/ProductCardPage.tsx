import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProductCardPage.module.scss'
import { memo } from 'react'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { ProductCard } from 'widgets/ProductCard'
import { Link } from 'react-router-dom'
import { getRouteMain } from 'shared/const/router'
import { Container } from 'shared/ui/Container/Container'

interface ProductCardPageProps {
	className?: string
}

const ProductCardPage:React.FC<ProductCardPageProps> = memo((props) => {
	const { className } = props

	return (
		<PageWrapper className={classNames(cls.ProductCardPage, {}, [className])}>
			<Container main>
				<div className={cls.productCardHeader}>
					<Link className={cls.link} to={getRouteMain('1')}>{'< На главную'}</Link>
				</div>
				<div className={cls.content}>
					<ProductCard />
				</div>
			</Container>
		</PageWrapper>
	)
})

export default ProductCardPage