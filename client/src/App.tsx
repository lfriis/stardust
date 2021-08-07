import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import scenes from './scenes/scenes';

import MapScreen from './screens/home/index';

// const Tab = createBottomTabNavigator();

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
