import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../ScreenPanel/Splash/Splash';
import Home from '../ScreenPanel/Home/Home';
import Weather from '../ScreenPanel/WeatherScreen/WeatherScreen';
import MainComponent from '../ScreenPanel/MainScreen/Main';
import Homeagain1 from '../ScreenPanel/Home/Homeagain';
function Router() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Main" component={Homeagain1} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;