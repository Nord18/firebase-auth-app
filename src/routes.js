import Home from './components/Home'
import Login from './components/Login'

export default [
	{
		path: '/',
		component: Home,
		name: 'home'
	},
	{
		path: '/login',
		component: Login,
		name: 'login'
	}
]