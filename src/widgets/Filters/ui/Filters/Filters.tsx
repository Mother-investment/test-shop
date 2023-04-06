import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Filters.module.scss'
import { memo } from 'react'
import { BrandsFilter } from 'features/BrandsFilter'
import { Container } from 'shared/ui/Container/Container'

interface FiltersProps {
	className?: string
}

export const Filters:React.FC<FiltersProps> = memo((props) => {
	const { className } = props


	// TODO добавить фильтры и поиск, перенести параметры в url
	return (
		<article className={classNames(cls.Filters, {}, [className])}>
			<Container className={cls.container}>
				<BrandsFilter />
			</Container>
		</article>
	)
})