import React from 'react'
import LoginScreen from './screens/login.screen'
import { MenuProvider } from 'react-native-popup-menu'

export default function App() {
	return (
		<MenuProvider>
			<LoginScreen />
		</MenuProvider>
	)
}
