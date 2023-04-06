import { useTheme } from './providers/ThemeProvider'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

const App: React.FC = () => {
	const { theme } = useTheme()

	return (
		<div className={theme}>
			<div className='app' id='app'>
				<Suspense fallback={<Loader/>}>
					<Navbar className='navbar'/>
					<div className='contentPage'>
						<AppRouter />
					</div>
				</Suspense>
			</div>
		</div>
	)
}
export default App
