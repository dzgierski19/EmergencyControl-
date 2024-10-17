import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import MainComponent from './pages/MainComponent'
import LoginPage from './pages/LoginPage'

const router = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/',
		element: <MainComponent />,
	},
])

export default function AppRouter() {
	return <RouterProvider router={router} />
}
