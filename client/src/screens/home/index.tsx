import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TextInput } from 'react-native';
import Map from '../../components/map/BaseMap';
import GooglePlacesSearch from '../../components/map/GooglePlacesSearch';
import mapStyles from '../../styles/mapStyles';

const HomeScreen = () => {
	const [fromDestination, setfromDestination] = useState<string>('');
	const [toDestination, setToDestination] = useState<string>('');

	useEffect(() => {
		console.log({ fromDestination, toDestination });
	}, [fromDestination, toDestination]);

	const handleSetLocation = (location: string, setLocation: any) => {
		setLocation(location);
	};

	return (
		<>
			{/* <SafeAreaView> */}
			<View style={mapStyles.container}>
				<Map />
				<GooglePlacesSearch
					placeholder="From"
					setLocation={() =>
						handleSetLocation(fromDestination, setfromDestination)
					}
					currentLocation={true}
				/>
				<GooglePlacesSearch
					placeholder="Where to?"
					setLocation={() =>
						handleSetLocation(toDestination, setToDestination)
					}
					currentLocation={false}
				/>
			</View>
			{/* </SafeAreaView> */}

			{/* <Slider /> */}
		</>
	);
};

export default HomeScreen;
