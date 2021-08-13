import React, { useRef, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { CoordinateProps } from '../../interfaces';
import mapStyles from '../../styles/mapStyles';

export default function Map(props: CoordinateProps): JSX.Element {
	// const [region, setRegion] = useState<object>({});
	const _map = useRef(null);
	const _camera = {
		center: {
			latitude: props.latitude,
			longitude: props.longitude,
		},
		pitch: 0,
		heading: 0,
		zoom: 15,
	};

	useEffect(() => {
		_map.current.setCamera(_camera);
		_map.current.getCamera(props).then((res) => console.log(res));
	}, [props]);

	return (
		<>
			<MapView
				ref={_map}
				provider={PROVIDER_GOOGLE}
				region={{
					latitude: props.latitude,
					longitude: props.longitude,
					latitudeDelta: 10,
					longitudeDelta: 10,
				}}
				style={mapStyles.base}
				showsUserLocation
				showsMyLocationButton
				followsUserLocation

				// onRegionChangeComplete={(region) => setRegion(region)}
			>
				<Marker
					coordinate={{
						latitude: 43.65373,
						longitude: -79.36194,
					}}
				/>
			</MapView>
		</>
	);
}
