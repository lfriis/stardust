import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import * as Location from 'expo-location';
import Map from '../../components/map/Map';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import FromDestinationSearch from '../../components/map/FromDestinationSearch';
// import ToDestinationSearch from '../../components/map/ToDestinationSearch';
import mapStyles from '../../styles/mapStyles';
import { CoordinateProps } from '../../interfaces';

const HomeScreen = () => {
	const [fromDestination, setFromDestination] = useState<CoordinateProps>({
		latitude: 0,
		longitude: 0,
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
				{/* <FromDestinationSearch setFromLocation={setFromDestination} /> */}
				{/* <ToDestinationSearch setToLocation={setToDestination} /> */}
				<View
					style={{
						position: 'absolute',
						left: 13,
						bottom: 13,
						backgroundColor: 'transparent',
					}}
				>
					<MaterialCommunityIcons.Button
						name="map-search"
						size={30}
						color={'#5f5f5f'}
						backgroundColor={'white'}
						borderRadius={10}
						onPress={() => console.log('clicked')}
					>
						Search
					</MaterialCommunityIcons.Button>
				</View>
			</View>

			{/* <Slider /> */}
		</>
	);
};

export default HomeScreen;
