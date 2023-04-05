import { classNames } from 'shared/lib/classNames/classNames'
import cls from './BrandsFilter.module.scss'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Brand } from '../model/types/brandsSchema'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getBrandsData } from '../model/selectors/getBrandsData/getBrandsData'
import { fetchBrandsData } from '../model/services/fetchBrandsData'
import { Checkbox } from 'shared/ui/Checkbox/Checkbox'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchProductsData } from 'entities/Products'
import { brandsActions } from '../model/slice/brandsSlice'
import { Button } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'

interface BrandsFilterProps {
	className?: string
}

export const BrandsFilter:React.FC<BrandsFilterProps> = memo((props) => {
	const { className } = props

	const dispatch = useAppDispatch()
	const brandsData = useSelector(getBrandsData)

	const [activeBrands, setActiveBrands] = useState<string[]>([])

	useInitialEffect(() => {
		dispatch(fetchBrandsData())
	})

	const chooseCategory = useCallback((category: string) => {
		if(activeBrands.includes(category)) {
			setActiveBrands(prev => [...prev.filter(item => item !== category)])
		}else {
			setActiveBrands(prev => [...prev, category])
		}
	},[activeBrands])

	const applyFilter = () => {
		dispatch(brandsActions.setActiveBrands(activeBrands))
	}

	if(!brandsData) {
		return <Loader />
	}

	return (
		<div className={classNames(cls.BrandsFilter, {}, [className])}>
			<ul className={cls.filters}>
				{brandsData.map(brand => (
					<Checkbox
						key={brand.id}
						title={brand.title}
						id={brand.id}
						name={''}
						handleChange={chooseCategory}
						checked={activeBrands.includes(brand.id)}
					/>
				))}
			</ul>
			<Button onClick={applyFilter}>Применить</Button>
		</div>
	)
})