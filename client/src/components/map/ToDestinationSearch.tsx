import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

type ToDestinationSearchProps = {
	setToLocation: any;
};

export default function FromDestinationSearch(
	props: ToDestinationSearchProps
): JSX.Element {
	return (
		<GooglePlacesAutocomplete
			placeholder="To"
			onPress={(data, details = null) => {
				props.setToLocation({
					latitude: details?.geometry?.location.lat,
					longitude: details?.geometry?.location.lng,
				});
			}}
			onFail={(e) => console.error(e)}
			query={{
				key: 'KEY',
				language: 'en',
			}}
			enableHighAccuracyLocation
			fetchDetails
		/>
	);
}
