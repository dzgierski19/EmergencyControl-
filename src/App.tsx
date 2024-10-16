import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import MainComponent from './pages/MainComponent'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainComponent />,
	},
])

export default function AppRouter() {
	return <RouterProvider router={router} />
}
