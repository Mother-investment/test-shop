import cls from './Modal.module.scss'
import { MutableRefObject, ReactNode, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'
import { Loader } from 'shared/ui/Loader/Loader'

interface ModalProps {
	className?: string
	children: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}

const ANIMATION_DELAY = 100

export const Modal:React.FC<ModalProps> = (props) => {
	const { className, children, isOpen, onClose, lazy } = props

	const [isClosing, setIsClosing] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onkeydown = useCallback((e:KeyboardEvent) => {
		if(e.key === 'Escape'){
			closeHandler()
		}
	}, [closeHandler])
	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	useEffect(() => {
		window.addEventListener('keydown', onkeydown)

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onkeydown)
		}
	}, [onkeydown])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	}

	if (lazy && !isMounted) {
		return null
	}

	return (
		<Suspense fallback={<Loader />}>
			<Portal>
				<div className={classNames(cls.Modal, mods, ['app_modal'])} onMouseDown={closeHandler}>
					<div className={cls.overlay}>
						<div className={classNames(cls.content, {}, [className])} onMouseDown={onContentClick}>
							{children}
						</div>
					</div>
				</div>
			</Portal>

		</Suspense>
	)
}
