import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

// pages
import LoginPage from './pages/LoginPage'
import PanelLayout from './layout/PanelLayout'
import MainPage from './pages/MainPage'
import Page404 from './pages/Page404'
import CoordinatorsPage from './pages/CoordinatorsPage'
import UnitsPage from './pages/UnitsPage'

const router = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/',
		element: <Navigate to="/login" replace />,
	},
	{
		path: '/panel',
		element: <PanelLayout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: 'coordinators',
				element: <CoordinatorsPage />,
			},
			{
				path: 'units',
				element: <UnitsPage />,
			},
		],
	},
	{
		path: '*',
		element: <Page404 />,
	},
])

export default function AppRouter() {
	return <RouterProvider router={router} />
}
