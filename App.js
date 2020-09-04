import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

function App() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal={true}>
				<View style={styles.card}>
					<View style={styles.topContainer}>
						<Image
							source={require('./src/assets/oldCouple.jpeg')}
							style={styles.image}
						/>
					</View>

					<View style={styles.dotHolder}>
						{new Array(4).fill(1).map(item => (
							<View style={styles.dot}></View>
						))}
					</View>

					<View style={styles.bottomContainer}>
						<View style={styles.textContainer}>
							<Text style={styles.header}>Podcast of Your Life</Text>
							<Text style={styles.subTitle}>
								Add a recording of up to 2 minutes to your pictures, tell your
								story.
							</Text>
						</View>
						<Text style={styles.skipText}>Skip</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		// fontFamily: 'CantataOne',
		color: '#082733',
	},
	image: {
		height: hp('60%'),
		width: wp('100%'),
	},
	bottomContainer: {
		alignItems: 'center',
		marginTop: hp('5%'),
		marginHorizontal: wp('5%'),
	},
	subTitle: {
		fontSize: 16,
		// fontFamily: 'CantataOne',
		color: '#96a0a9',
		marginTop: hp('2%'),
	},
	skipText: {
		fontSize: 16,
		fontWeight: 'bold',
		// fontFamily: 'CantataOne',
		color: '#96a0a9',
		marginTop: hp('2%'),
		textDecorationLine: 'underline',
		marginTop: hp('7%'),
	},
	dot: {
		width: 12,
		height: 12,
		borderRadius: 6,
		backgroundColor: '#d3b1bf',
		marginRight: wp('1.3%'),
	},
	dotHolder: {
		flexDirection: 'row',
		marginTop: hp('2%'),
		marginLeft: wp('12%'),
	},
	scrollView: {
		flexDirection: 'column',
	},
	card: {
		width: wp('100%'),
		height: hp('100%'),
	},
})

export default App
