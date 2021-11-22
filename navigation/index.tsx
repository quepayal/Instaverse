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
import { Avatar, Icon } from 'native-base';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { G, Path } from 'react-native-svg';
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
            <Icon color={color}>
              <G>
                <Path d='M17.5,15L10,7.5L2.5,15l1.41,1.41L5,15.33V20h10v-4.67l1.09,1.09L17.5,15zM13,18h-2v-3H9v3H7v-4.67l3,-3l3,3V18zM22,7.5h-1.19l0.75,0.75l-0.71,0.71L19.39,7.5H18.5v0.89l1.45,1.45l-0.71,0.71L18.5,9.81V11h-1V9.81l-0.75,0.75l-0.71,-0.71l1.45,-1.45V7.5h-0.89l-1.45,1.45l-0.71,-0.71l0.75,-0.75H14v-1h1.19l-0.75,-0.75l0.71,-0.71l1.45,1.45h0.89V5.61l-1.45,-1.45l0.71,-0.71l0.75,0.75V3h1v1.19l0.75,-0.75l0.71,0.71L18.5,5.61V6.5h0.89l1.45,-1.45l0.71,0.71L20.81,6.5H22V7.5z'></Path>
              </G>
            </Icon>
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
            <Icon color={color}>
              <G>
                <Path d='M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z'></Path>
              </G>
            </Icon>
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
            <Icon color={color}>
              <G>
                <Path d='M13,7h-2v4L7,11v2h4v4h2v-4h4v-2h-4L13,7zM12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8 8,3.59 8,8 -3.59,8 -8,8z'></Path>
              </G>
            </Icon>
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
            <Icon color={color}>
              <G>
                <Path d='M19.66,3.99c-2.64,-1.8 -5.9,-0.96 -7.66,1.1 -1.76,-2.06 -5.02,-2.91 -7.66,-1.1 -1.4,0.96 -2.28,2.58 -2.34,4.29 -0.14,3.88 3.3,6.99 8.55,11.76l0.1,0.09c0.76,0.69 1.93,0.69 2.69,-0.01l0.11,-0.1c5.25,-4.76 8.68,-7.87 8.55,-11.75 -0.06,-1.7 -0.94,-3.32 -2.34,-4.28zM12.1,18.55l-0.1,0.1 -0.1,-0.1C7.14,14.24 4,11.39 4,8.5 4,6.5 5.5,5 7.5,5c1.54,0 3.04,0.99 3.57,2.36h1.87C13.46,5.99 14.96,5 16.5,5c2,0 3.5,1.5 3.5,3.5 0,2.89 -3.14,5.74 -7.9,10.05z'></Path>
              </G>
            </Icon>
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
            <Avatar
              bg='#42275a'
              mr='1'
              size='5'
              source={{
                uri: 'https://miro.medium.com/fit/c/64/64/1*VtytdUkVgindIMV4vFrK5g.jpeg',
              }}
            ></Avatar>
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
  return (
    <Icon marginBottom='-3' {...props}>
      <G>
        <Path
          d='M17.5,15L10,7.5L2.5,15l1.41,1.41L5,15.33V20h10v-4.67l1.09,1.09L17.5,15zM13,18h-2v-3H9v3H7v-4.67l3,-3l3,3V18zM22,7.5h-1.19l0.75,0.75l-0.71,0.71L19.39,7.5H18.5v0.89l1.45,1.45l-0.71,0.71L18.5,9.81V11h-1V9.81l-0.75,0.75l-0.71,-0.71l1.45,-1.45V7.5h-0.89l-1.45,1.45l-0.71,-0.71l0.75,-0.75H14v-1h1.19l-0.75,-0.75l0.71,-0.71l1.45,1.45h0.89V5.61l-1.45,-1.45l0.71,-0.71l0.75,0.75V3h1v1.19l0.75,-0.75l0.71,0.71L18.5,5.61V6.5h0.89l1.45,-1.45l0.71,0.71L20.81,6.5H22V7.5z'
          scale='1.2'
        ></Path>
      </G>
    </Icon>
  );
}
