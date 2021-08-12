import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { CoordinateProps } from '../../interfaces';
import mapStyles from '../../styles/mapStyles';

export default function Map(props: CoordinateProps): JSX.Element {
	return (
		<>
			<MapView
				provider={PROVIDER_GOOGLE}
				region={{
					latitude: props.latitude,
					longitude: props.longitude,
					latitudeDelta: 10,
					longitudeDelta: 10,
				}}
				style={mapStyles.base}
				showsUserLocation
			/>

			<Marker
				coordinate={{
					latitude: 38.5815719,
					longitude: -121.4943996,
				}}
				image={require('../../assets/images/res.png')}
			/>
		</>
	);
}
