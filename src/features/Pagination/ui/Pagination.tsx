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
    <div>
      <nav>
        <ul className={classNames(cls.Pagination, {}, [className])}>
          <li className={classNames(cls.pageItem, {[cls.disabled]: prevPage === currentPage}, [])}>
            <Link to={getRouteMain(`${prevPage}`)} className={cls.pageLink}>
              Назад
            </Link>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={classNames(cls.pageItem, {[cls.active]: pageNumber === currentPage}, [])}
            >
              <Link to={getRouteMain(`${pageNumber}`)} className={cls.pageLink}>
                {pageNumber}
              </Link>
            </li>
          ))}
          <li className={classNames(cls.pageItem, {[cls.disabled]: nextPage === currentPage}, [])}>
			{/* TODO ДИЗЕЙБЛИТЬ!! pointer-events: none */}
            <Link to={getRouteMain(`${nextPage}`)} className={cls.pageLink}>
              Далее
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}