import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { Cart } from 'features/Cart'
import { Container } from 'shared/ui/Container/Container'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = memo((props) => {
	const { className } = props

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Container
				className={cls.container}
				justifyContent='jc_space-between'
				alignItems='ai_center'
				direction='d_row'
				main
			>
				<ThemeSwitcher />
				<Cart />
			</Container>
		</div>
	)
})
