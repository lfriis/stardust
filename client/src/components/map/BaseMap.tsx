import React, { useState } from 'react';
import MapView from 'react-native-maps';

interface IUserRegion {
	latitude: number;
	longitude: number;
	latitudeDelta: number;
	longtudeDelta: number;
}

export default function BaseMap(): JSX.Element {
	const [userRegion, setUserRegion] = useState<IUserRegion>(undefined);

	const getUserRegion = () => {
		// Geolocation.getCurrentPosition(
		// 	(position) => {
		// 		console.log(position);
		// 	},
		// 	(e) => {
		// 		console.log(e);
		// 	}
		// );
	};

	// setUserRegion({
	// 	latitude: 37.78825,
	// 	longitude: -122.4324,
	// 	latitudeDelta: 0.0922,
	// 	longtudeDelta: 0.042,
	// });

	console.log(userRegion);

	return (
		<>
			<MapView
				style={{ flex: 1 }}
				region={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				showsUserLocation={true}
			/>
			{/* <RadiusSlider /> */}
		</>
	);
}
