import React, { useState } from 'react'
import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	ImageBackground,
	TextInput,
	TouchableOpacity
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger
} from 'react-native-popup-menu'

const options = ['English', 'Japanese']

export default function App() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	return (
		<ImageBackground
			source={require('../assets/background.png')}
			style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.header}>Hello!</Text>
				<Text style={styles.subTitle}>
					Let’s set up your profile to start creating beautiful albums.
				</Text>
			</View>

			<View style={styles.formContainer}>
				<Text style={styles.label}>Name</Text>
				<View style={styles.inputHolder}>
					<TextInput
						onChangeText={text => setName(text)}
						value={name}
						style={styles.textInput}
						placeholder={' name'}
					/>
				</View>

				<View style={styles.spacerV}></View>

				<Text style={styles.label}>Email</Text>
				<View style={styles.inputHolder}>
					<TextInput
						onChangeText={text => setEmail(text)}
						value={email}
						style={styles.textInput}
						placeholder={' ds@example.com'}
					/>
				</View>

				<View style={styles.spacerV}></View>

				<Text style={styles.label}>Subtitles</Text>
				<Text style={styles.subtitle}>
					Choose a language for your auto translate subtitles.{' '}
				</Text>
				<Menu>
					<MenuTrigger>
						<View style={styles.menuTrigger}>
							<Text style={styles.triggerText}>Select a language</Text>
						</View>
					</MenuTrigger>
					<MenuOptions>
						<MenuOption onSelect={() => console.log('s')}>
							{options.map(item => (
								<Text key={item} style={styles.subTitle}>
									{item}
								</Text>
							))}
						</MenuOption>
					</MenuOptions>
				</Menu>
			</View>

			<TouchableOpacity style={styles.button} onPress={() => console.log('s')}>
				<Text style={styles.buttonText}>Get Started</Text>
			</TouchableOpacity>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		width: wp('100%'),
		height: hp('100%')
	},
	headerContainer: {
		marginTop: Platform.OS === 'ios' ? hp('30%') : hp('20%'),
		alignItems: 'flex-start',
		width: wp('100%'),
		paddingHorizontal: wp('13%')
	},
	header: {
		fontSize: 46,
		fontWeight: 'bold',
		// fontFamily: 'CantataOne',
		color: '#082733'
	},
	subTitle: {
		fontSize: 16,
		// fontFamily: 'CantataOne',
		color: '#96a0a9',
		marginTop: hp('1%')
	},
	textInput: {
		width: wp('77%'),
		height: 42,
		borderRadius: wp('1%'),
		borderWidth: 1,
		borderColor: 'silver',
		paddingLeft: wp('2%'),
		backgroundColor: 'white'
	},
	formContainer: {
		marginTop: hp('5%'),
		paddingHorizontal: wp('12%')
	},
	label: {
		fontSize: 12,
		marginBottom: hp('1%')
	},
	spacerV: {
		height: hp('3%')
	},
	inputHolder: {
		shadowColor: 'black',
		shadowOffset: { width: 2, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		elevation: 2
	},
	button: {
		backgroundColor: '#f4c136',
		borderRadius: wp('7%'),
		marginTop: hp('10%'),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.37,
		shadowRadius: 3,
		elevation: 8
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: '500',
		paddingHorizontal: wp('14%'),
		paddingVertical: hp('1.5%')
	},
	menuTrigger: {
		width: wp('77%'),
		backgroundColor: 'white',
		borderRadius: wp('1%'),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.37,
		shadowRadius: 3,
		elevation: 8
	},
	triggerText: {
		fontSize: 16,
		// fontFamily: 'CantataOne',
		color: '#96a0a9',
		paddingVertical: hp('2%'),
		paddingLeft: wp('3%')
	},
	subtitle: {
		color: '#96a0a9',
		fontSize: 10,
		marginBottom: hp('1%')
	}
})
