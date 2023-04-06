import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Image.module.scss'
import { memo } from 'react'

export type ImageSize = 'size_s' | 'size_m' | 'size_l'

interface ImageProps {
	className?: string
	size?: ImageSize
	src: string
	alt: string
}

export const Image:React.FC<ImageProps> = memo((props) => {
	const { className, src, alt, size = 'size_m' } = props

	return (
		<img className={classNames(cls.Image, {}, [className, cls[size]])} src={src} alt={alt} />
	)
})