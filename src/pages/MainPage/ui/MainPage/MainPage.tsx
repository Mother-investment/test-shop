import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MainPage.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'
import { Filters } from 'widgets/Filters'
import { ProductsList } from 'widgets/ProductsList'
import { Cart } from 'features/Cart'

type MainPageProps = {}

const MainPage: React.FC<MainPageProps> = (props) => {

	return (
		<PageWrapper className={classNames(cls.MainPage, {}, [])}>
			<Cart />
			<Filters />
			<ProductsList />
		</PageWrapper>
	)
}
export default MainPage