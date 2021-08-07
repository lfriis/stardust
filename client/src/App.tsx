import React from 'react';
import MapScreen from './screens/home/index';
// import scenes from './scenes/scenes';

export default function App() {
	return (
		<MapScreen />

		// <NavigationContainer>
		// 	<Tab.Navigator>
		// 		<Tab.Screen name="Test" component={Account} />
		// {/* {scenes.map((scene, i) => {
		// 	<Tab.Screen
		// 		key={i}
		// 		name={scene.name}
		// 		component={scene.component}
		// 	/>;
		// })} */}
		// 	</Tab.Navigator>
		// </NavigationContainer>
	);
}
