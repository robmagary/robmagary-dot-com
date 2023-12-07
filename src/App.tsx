import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))
const Resume = lazy(async () => import('pages/Resume'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<Gallery />} />
					<Route path=':fruitName' element={<Details />} />
					<Route path='resume' element={<Resume />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
