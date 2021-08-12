import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import Map from '../../components/map/Map';
import FromDestinationSearch from '../../components/map/FromDestinationSearch';
import ToDestinationSearch from '../../components/map/ToDestinationSearch';
import mapStyles from '../../styles/mapStyles';
import { CoordinateProps } from '../../interfaces';

const HomeScreen = () => {
	const [fromDestination, setFromDestination] = useState<CoordinateProps>({
		latitude: 37.785834,
		longitude: -122.406417,
	});
	const [toDestination, setToDestination] = useState<CoordinateProps>();

	useEffect(() => {
		handleSetCurrentLocation();
	}, []);

	useEffect(() => {
		console.log({ fromDestination });
	}, [fromDestination]);

	// By default we set the from location to the users current location
	const handleSetCurrentLocation = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();

		if (status === 'granted') {
			const { coords } = await Location.getCurrentPositionAsync({});
			setFromDestination({
				latitude: coords.latitude,
				longitude: coords.longitude,
			});
		} else {
			console.log('Permission not granted.');
		}
	};

	return (
		<>
			<View style={mapStyles.container}>
				<Map
					latitude={fromDestination.latitude}
					longitude={fromDestination.longitude}
				/>
				<FromDestinationSearch setFromLocation={setFromDestination} />
				<ToDestinationSearch setToLocation={setToDestination} />
			</View>

			{/* <Slider /> */}
		</>
	);
};

export default HomeScreen;
