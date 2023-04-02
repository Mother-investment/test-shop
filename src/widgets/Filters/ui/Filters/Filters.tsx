import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Filters.module.scss'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { BrandsFilter } from 'features/BrandsFilter'

interface FiltersProps {
	className?: string
}

export const Filters:React.FC<FiltersProps> = memo((props) => {
	const { className } = props

	

	return (
		<article className={classNames(cls.Filters, {}, [className])}>
			<BrandsFilter />
		</article>
	)
})