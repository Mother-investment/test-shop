import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './ErrorPage.module.scss'
import { PageWrapper } from 'shared/ui/PageWrapper/PageWrapper'

interface ErrorPageProps {
	className?: string
}

const ErrorPage:React.FC<ErrorPageProps> = (props) => {
	const { className } = props

	const reloadPage = () => {
		location.reload()
	}

	return (
		<PageWrapper className={classNames(cls.ErrorPage, {}, [className])}>
			<p>Произошла ошибка</p>
			<Button onClick={reloadPage}>Обновить страницу</Button>
		</PageWrapper>
	)
}

export default ErrorPage