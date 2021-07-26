import React from 'react';
import { Text, SafeAreaView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './components/Map';

const HomeScreen = (): JSX.Element => {
	return <Map />;
};

const AccountScreen = (): JSX.Element => {
	return (
		<SafeAreaView>
			<Text>Account Screen</Text>
		</SafeAreaView>
	);
};

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Account" component={AccountScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
