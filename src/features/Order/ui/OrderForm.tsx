import { classNames } from 'shared/lib/classNames/classNames'
import cls from './OrderForm.module.scss'
import { memo, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from 'shared/ui/Input/Input'
import { withHookFormMask } from 'use-mask-input'
import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { orderActions } from '../module/slice/orderSlice'
import { useSelector } from 'react-redux'
import { getOrderOk } from '../module/selectors/getOrderOk/getOrderOk'
import { getRouteMain } from 'shared/const/router'
import { useNavigate } from 'react-router-dom'
import { postOrder } from '../module/services/postOrder'
import { Order } from '../module/types/orderSchema'
import { getProductsCart } from 'features/Cart'

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
		formState: { errors }
	} = useForm<FormValues>({ mode: 'onChange' })

	const name = watch('name')
	const phone = watch('phone')

	const onPostOrder = () => {
		if(name && phone && productsCart.length !== 0) {
			dispatch(postOrder({name, phone, productsId: productsCart.map(product => product.id)}))
		}
	}

	const closeModal = () => {
		navigate(getRouteMain('1'))
	}

	return (
		<div className={classNames(cls.CartForm, {}, [className])}>
			<div className={cls.formItem}>
				<h2>Имя</h2>
				<Input
					className={errors.name ? cls.errorField : ''}
					placeholder='Ведите имя'
					register={register(
						'name',
						{required: true, maxLength: 50, pattern: /^[a-zа-яё\s]+$/i}
					)}
				/>
				{errors.name?.type === 'required' && <p>Заполните поле!</p>}
				{errors.name?.type === 'pattern' && <p>Нужно заполнить правильно!</p>}
				{errors.name?.type === 'maxLength' && <p>Слишком много букв!</p>}
			</div>

			<div className={cls.formItem}>
				<h2>Номер телефона</h2>
				<Input
					className={errors.phone ? cls.errorField : ''}
					type='tel'
					placeholder='+7 (999) 999-99-99'
					register={withHookFormMask(register(
						'phone',
						{required: true}), ['+7 (999) 999-99-99']
					)}
				/>
				{errors.phone?.type === 'required' && <p>Заполните поле!</p>}
			</div>

			<Button
				className={cls.btn}
				onClick={onPostOrder}
			>
				Отправить
			</Button>

			{orderOk == 'ok' &&
				<Modal isOpen={orderOk == 'ok'} onClose={closeModal}>
					<h1>Заказ успешно отправлен!</h1>
					<Button onClick={closeModal} >Закрыть</Button>
				</Modal>
			}
		</div>
	)
})