import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './src/pages/Splash';
import Home from './src/pages/Home';

function splashScreen() {
  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
}

function Root() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: 'transparent',
        drawerStyle: {
          backgroundColor: '#00283B',
          width: 280,
        },

        headerStyle: {
          elevation: 1,
          shadowOpacity: 1,
          backgroundColor: 'transparent',
        },
        headerTintColor: '#00283B',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 16,
          textTransform: 'uppercase',
          color: 'transparent',
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const config = {
  animation: 'timing',
  config: {
    stiffness: 1000,
    damping: 1000,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          name="Root"
          component={Root}
        />
        <Stack.Screen
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
          name="Splash"
          component={splashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00283B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
