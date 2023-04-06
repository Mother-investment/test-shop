import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Loader } from '../Loader/Loader'

interface PortalProps {
	children: ReactNode
	element?: HTMLElement
}

export const Portal:React.FC<PortalProps> = (props) => {
	const { children } = props

	const getApp = document.getElementById('app')

	if(!getApp) {
		return <Loader />
	}

	return createPortal(children, getApp)
}