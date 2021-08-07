import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyles from '../../styles/mapStyles';

interface IUserRegion {
	latitude: number;
	longitude: number;
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

	return (
		<>
			<MapView
				provider={PROVIDER_GOOGLE}
				region={{
					latitude: 43.653226,
					longitude: -79.3831843,
					latitudeDelta: 0.04,
					longitudeDelta: 0.05,
				}}
				style={mapStyles.base}
				showsUserLocation
			/>
			{/* <RadiusSlider /> */}
		</>
	);
}
