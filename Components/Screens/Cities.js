import React, {useContext} from 'react';
import {Text, StyleSheet, ScrollView, View, Button, TouchableOpacity} from 'react-native';
import {UserContext} from "../ContextApi";

export default function Cities({navigation}) {
	const {userData} = useContext(UserContext);
	const [data] = userData;
	return (
		<ScrollView style={styles.scrollview}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<Button title={'Back'} onPress={() => navigation.navigate('AddCity')}/>
				<Text style={{fontSize: 25, fontWeight: "bold"}}>Cities</Text>
				<View></View>
			</View>
			<View>
				{data.length > 0 ? data.map((value, index) => (
					<View key={index}>
						<TouchableOpacity onPress={() => navigation.navigate('Places', {index: index})}>
							<View style={{borderStyle: 'solid', borderColor: 'red', borderWidth: 2, margin: 5}}>
								<Text>{value.country}</Text>
								<Text>{value.city}</Text>
							</View>
						</TouchableOpacity>
					</View>
				)) : <Text>No country available!</Text>}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		padding: 24,

	},
	paragraph: {
		margin: 24,
		marginTop: 0,
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	input: {
		alignItems: "center",
		height: 40,
		margin: 12,
		borderWidth: 1,
		width: 200
	},
	scrollItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: '#008080',
		width: "90%",
		height: 50,
		padding: 10,
		margin: 10,
		borderRadius: 30,
		alignSelf: "center"
	},
	scrollviewText: {
		fontSize: 25,
		color: "white",
	},
	scrollview: {
		width: "100%",
		height: "100%",
	},
	title: {
		color: "white",
		fontSize: 15
	},
	button: {
		alignItems: "center",
		backgroundColor: "#008080",
		padding: 10,
		width: 170
	},
	logo: {
		height: 128,
		width: 128,
	}
});