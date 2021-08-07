import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function GooglePlacesSearch({
	placeholder,
	setLocation,
	currentLocation,
}): JSX.Element {
	return (
		<GooglePlacesAutocomplete
			placeholder={placeholder}
			onPress={(data, details = null) => {
				console.log(details.geometry.location);
				setLocation(details?.geometry?.location);
			}}
			onFail={(e) => console.error(e)}
			query={{
				key: 'ENTER KEY',
				language: 'en',
			}}
			// currentLocation={currentLocation}
			// currentLocationLabel="Current location"
			fetchDetails
		/>
	);
}
