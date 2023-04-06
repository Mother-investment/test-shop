import { classNames } from 'shared/lib/classNames/classNames'
import cls from './OrderForm.module.scss'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from 'shared/ui/Input/Input'
import { withHookFormMask } from 'use-mask-input'
import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getOrderOk } from '../module/selectors/getOrderOk/getOrderOk'
import { getRouteMain } from 'shared/const/router'
import { useNavigate } from 'react-router-dom'
import { postOrder } from '../module/services/postOrder'
import { getProductsCart } from 'features/Cart'
import AcceptedIcon from 'shared/assets/icons/AcceptedIcon.svg'
import { Container } from 'shared/ui/Container/Container'

interface CartFormProps {
	className?: string
}

interface FormValues {
	name: string
	phone: string
}

export const OrderForm:React.FC<CartFormProps> = memo((props) => {
	const { className } = props

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const orderOk = useSelector(getOrderOk)
	const productsCart = useSelector(getProductsCart)

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({ mode: 'onChange' })

	const name = watch('name')
	const phone = watch('phone')

	const onSubmit = () => {
		if(name && phone && productsCart.length !== 0) {
			dispatch(postOrder({ name, phone, productsId: productsCart.map(product => product.id) }))
		}
	}

	const closeModal = () => {
		navigate(getRouteMain('1'))
	}

	return (
		<form className={classNames(cls.OrderForm, {}, [className])} onSubmit={handleSubmit(onSubmit)}>
			<div className={cls.formItem}>
				<h2 className={cls.fieldName}>Имя</h2>
				<Input
					placeholder='Ведите имя'
					register={register(
						'name',
						{ required: true, maxLength: 50, pattern: /^[a-zа-яё\s]+$/i }
					)}
				/>
				{errors.name?.type === 'required' && <p className={cls.errorMessage}>Заполните поле!</p>}
				{errors.name?.type === 'pattern' && <p className={cls.errorMessage}>Нужно заполнить правильно!</p>}
				{errors.name?.type === 'maxLength' && <p className={cls.errorMessage}>Слишком много букв!</p>}
			</div>

			<div className={cls.formItem}>
				<h2 className={cls.fieldName}>Номер телефона</h2>
				<Input
					type='tel'
					placeholder='+7 (999) 999-99-99'
					register={withHookFormMask(register(
						'phone',
						{ required: true }), ['+7 (999) 999-99-99']
					)}
				/>
				{errors.phone?.type === 'required' && <p className={cls.errorMessage}>Заполните поле!</p>}
			</div>

			<Button
				className={cls.btn}
				onClick={onSubmit}
				theme='background'
				type='submit'
			>
				Отправить
			</Button>

			{orderOk == 'ok' &&
				<Modal isOpen={orderOk == 'ok'} onClose={closeModal}>
					<Container alignItems='ai_center'>
						<AcceptedIcon className={cls.modalIcon} />
						<h1 className={cls.modalTitle}>Заказ успешно отправлен!</h1>
						<Button className={cls.modalBtn} theme='outline' onClick={closeModal} >Закрыть</Button>
					</Container>
				</Modal>
			}
		</form>
	)
})