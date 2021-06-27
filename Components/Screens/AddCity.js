import React, {useState, useContext} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {UserContext} from "../ContextApi";

export default function AddCity({navigation}) {
	const {userData} = useContext(UserContext);
	const [data, setData] = userData;
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const handleClick = () => {
		alert('Country and city added!');
		const pushedData = {country: country, city: city, locations: []};
		setData(data => [pushedData, ...data]);
	}
	return (
		<View style={styles.container}>
			<Text style={styles.secondhead}> Country </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCountry(text)}
				placeholder="Enter your Country"
			/>
			<Text style={styles.secondhead}> City </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCity(text)}
				placeholder="Enter your city"
			/>
			<TouchableOpacity
				style={styles.button}
			>
				<Text style={styles.head} onPress={handleClick}>Add City</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.head} onPress={() => navigation.navigate('Cities')}>View City List!</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 24,
		marginBottom: 120
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
		width: 200,
		color: "#008080",
		borderColor: "#008080",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#008080",
		padding: 10,
		width: 170
	},
	footbutton: {
		marginLeft: 15,
		marginTop: 100,
		alignItems: "center",
		backgroundColor: "#008080",
		padding: 10,
		width: "100%",
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