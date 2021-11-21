/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { Header } from '../components/Header';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#f0edf6'
      labeled={false}
      shifting={true}
    >
      <Tab.Screen
        name='Home'
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Instaverse',
          tabBarColor: '#302b63',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='home' size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name='bell-o'
                size={24}
                color={Colors[colorScheme].text}
                style={{ marginTop: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Feather
              name='align-left'
              size={24}
              color={Colors[colorScheme].text}
              style={{ marginTop: 15 }}
            />
          ),
        })}
      />
      <Tab.Screen
        name='Search'
        component={TabTwoScreen}
        options={{
          title: 'Search',
          tabBarColor: '#CB356B',
          tabBarIcon: ({ color }) => (
            <Feather name='search' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='AddPost'
        component={TabTwoScreen}
        options={{
          title: 'Add Post',
          tabBarColor: '#1CB5E0',
          tabBarIcon: ({ color }) => (
            <Ionicons name='add-circle-outline' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Activity'
        component={TabTwoScreen}
        options={{
          title: 'Activity',
          tabBarColor: '#fd746c',
          tabBarIcon: ({ color }) => (
            <FontAwesome name='heart-o' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={TabTwoScreen}
        options={{
          title: 'Profile',
          tabBarColor: '#42275a',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='account-circle' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}
