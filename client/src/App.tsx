import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = (): JSX.Element => {
	return (
		<SafeAreaView>
			<Text>Home Screen!</Text>
		</SafeAreaView>
	);
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

// https://thinhtran3588.medium.com/make-professional-mobile-apps-with-react-native-and-typescript-introduction-777ba2423c35
