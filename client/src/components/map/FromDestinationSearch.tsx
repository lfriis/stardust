import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

type FromDestinationSearchProps = {
	setFromLocation: any;
};

export default function FromDestinationSearch(
	props: FromDestinationSearchProps
): JSX.Element {
	return (
		<GooglePlacesAutocomplete
			placeholder="From"
			onPress={(data, details = null) => {
				props.setFromLocation({
					latitude: details?.geometry?.location.lat,
					longitude: details?.geometry?.location.lng,
				});
			}}
			onFail={(e) => console.error(e)}
			query={{
				key: 'KEY',
				language: 'en',
			}}
			currentLocationLabel="Current Location"
			currentLocation
			enableHighAccuracyLocation
			fetchDetails
		/>
	);
}
