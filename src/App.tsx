import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

// pages
import LoginPage from './pages/LoginPage'
import PanelLayout from './layout/PanelLayout'
import MainPage from './pages/MainPage'

const router = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/',
		element: <Navigate to='/login' replace />,
	},
	{
		path: '/panel',
		element: <PanelLayout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
		],
	},
])

export default function AppRouter() {
	return <RouterProvider router={router} />
}
