import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import { AppRouter } from './providers/router'

const App: React.FC = () => {

	return (
		<div className='app' id='app'>
			<Suspense fallback={<Loader/>}>
				<div className='contentPage'>
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}
export default App
