import React, {useContext, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View,} from 'react-native';
import {UserContext} from "../ContextApi";

export default function Places({navigation}) {
	const index = navigation.getParam('index');
	const [name, setName] = useState('');
	const [info, setInfo] = useState('');
	const {userData} = useContext(UserContext);
	const [data, setData] = userData;
	const updateLocation = () => {
		alert('Location name and info added!');
		navigation.navigate('Cities');
		data[index].locations.push({name: name, info: info});
		setData(data);
	}
	return (
		<ScrollView style={styles.scrollview}>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<Button title={'Back'} onPress={() => navigation.navigate('Cities')}/>
				<Text style={{fontSize: 25, fontWeight: "bold"}}>{data[index].city}</Text>
				<View></View>
			</View>
			<View>
				{data[index].locations.length > 0 ? data[index].locations.map((value, index) => (
					<View key={index}>
						<View style={{borderStyle: 'solid', borderColor: 'red', borderWidth: 2, margin: 5}}>
							<Text>{value.name}</Text>
							<Text>{value.info}</Text>
						</View>
					</View>
				)) : <Text>No location for this city!</Text>}
			</View>
			<TextInput
				style={styles.input}
				placeholder="Enter Name"
				onChangeText={text => setName(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Enter Info"
				onChangeText={text => setInfo(text)}
			/>
			<Button title={'Add Location'} onPress={updateLocation}/>
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
		width: 170,
		marginLeft: 80
	},
	input: {
		alignItems: "center",
		height: 40,
		margin: 12,
		borderWidth: 1,
		width: 200,
		color: "#008080",
		borderColor: "#008080",
		marginLeft: 65,
	},
	logo: {
		height: 128,
		width: 128,
	},
	head: {
		color: "white",
		fontSize: 15
	},
	secondhead: {
		color: "#008080",
		fontSize: 15
	}
});