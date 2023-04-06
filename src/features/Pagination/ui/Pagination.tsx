import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Pagination.module.scss'
import { getRouteMain } from 'shared/const/router'

interface PaginationProps {
    className?: string
    totalPages: number
    currentPage: number
}

export const Pagination: React.FC<PaginationProps> = (props) => {
	const { className, totalPages, currentPage } = props

	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
	const prevPage = currentPage === 1 ? 1 : currentPage - 1
	const nextPage = currentPage === totalPages ? totalPages : currentPage + 1

	return (
		<nav className={classNames(cls.paginationContainer, {}, [className])}>
			<ul className={classNames(cls.Pagination, {}, [])}>
				<li className={cls.pageItem}>
					<Link className={classNames(cls.pageLink, { [cls.disabled]: prevPage === currentPage }, [])} to={getRouteMain(`${prevPage}`)}>
						{'<'}
					</Link>
				</li>

				{pageNumbers.map((pageNumber) => (
					<li key={pageNumber} className={cls.pageItem}>
						<Link className={classNames(cls.pageLink, { [cls.active]: pageNumber === currentPage }, [])} to={getRouteMain(`${pageNumber}`)}>
							{pageNumber}
						</Link>
					</li>
				))}

				<li className={cls.pageItem}>
					<Link className={classNames(cls.pageLink, { [cls.disabled]: nextPage === currentPage }, [])} to={getRouteMain(`${nextPage}`)}>
						{'>'}
					</Link>
				</li>
			</ul>
		</nav>
	)
}
