import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'

interface NotFoundPageProps {
className?: string
}

export const NotFoundPage:React.FC<NotFoundPageProps> = (props) => {
	const { className } = props

	return (
		<PageWrapper className={classNames(cls.NotFoundPage, {}, [className])}>
			Страница не найдена
		</PageWrapper>
	)
}