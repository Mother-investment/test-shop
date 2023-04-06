import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MainPage.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { Filters } from 'widgets/Filters'
import { ProductsList } from 'widgets/ProductsList'
import { Container } from 'shared/ui/Container/Container'

const MainPage: React.FC = () => {

	return (
		<PageWrapper className={classNames(cls.MainPage, {}, [])}>
			<Container className={cls.container} main>
				<Filters className={cls.filters}/>
				<ProductsList className={cls.productsList}/>
			</Container>
		</PageWrapper>
	)
}
export default MainPage