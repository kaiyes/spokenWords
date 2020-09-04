import React, {useState} from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
	TouchableOpacity,
	useWindowDimensions,
} from 'react-native'
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const cards = [
	{
		title: 'Photo Album',
		subTitle: 'Build beautiful albums with your own photos or videos',
		pic: require('./src/assets/pelican.jpeg'),
	},
	{
		title: 'Podcast of Your Life',
		subTitle:
			'Add a recording of up to 2 minutes to your pictures, tell your story.',
		pic: require('./src/assets/oldCouple.jpeg'),
	},
	{
		title: 'Collaborate',
		subTitle: 'Invite friends and family to build an album together!',
		pic: require('./src/assets/ballons.jpeg'),
	},
	{
		title: 'Auto-Translate',
		subTitle:
			'Subtitles are added to your recordings so family and friends can follow along.',
		pic: require('./src/assets/map.jpeg'),
	},
]

function Card({title, subTitle, pic, index, pageNumber}) {
	return (
		<View style={styles.card} key={title}>
			<View style={styles.topContainer}>
				<Image source={pic} style={styles.image} />
			</View>

			<View style={styles.bottomContainer}>
				<View style={styles.textContainer}>
					<Text style={styles.header}>{title}</Text>
					<Text style={styles.subTitle}>{subTitle}</Text>
				</View>
				<TouchableOpacity onPress={() => console.log('s')}>
					<Text style={styles.skipText}>Skip</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

function App() {
	const windowWidth = useWindowDimensions().width

	const [pageNumber, setPageNumber] = useState(0)

	return (
		<View style={styles.container}>
			<ScrollView
				horizontal={true}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				onScroll={i => {
					const activeIndex = Math.floor(
						i.nativeEvent.contentOffset.x /
							i.nativeEvent.layoutMeasurement.width,
					)
					setPageNumber(activeIndex)
				}}>
				{cards.map((item, index) => (
					<Card
						title={item.title}
						subTitle={item.subTitle}
						pic={item.pic}
						index={index}
						number={pageNumber}
						key={item.title}
					/>
				))}
			</ScrollView>

			<View style={styles.dotHolder}>
				{cards.map((item, index) => (
					<View
						key={item.title}
						style={[
							styles.dot,
							{
								backgroundColor: pageNumber === index ? 'pink' : 'white',
								borderColor: pageNumber === index ? 'white' : 'pink',
								borderWidth: pageNumber === index ? 0 : 1,
							},
						]}></View>
				))}
			</View>
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
		height: hp('65%'),
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
		marginTop: Platform.OS === 'ios' ? hp('5%') : hp('2%'),
	},
	dot: {
		width: 12,
		height: 12,
		borderRadius: 6,
		backgroundColor: '#d3b1bf',
		marginRight: wp('1.3%'),
	},
	dotHolder: {
		position: 'absolute',
		bottom: Platform.OS === 'ios' ? hp('32%') : hp('28%'),
		flexDirection: 'row',
		marginLeft: wp('5%'),
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
