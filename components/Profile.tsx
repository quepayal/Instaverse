import * as React from 'react';
import { HStack, Box, Icon, Avatar, Divider } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MontserratBoldText, MontserratText } from './StyledText';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, TouchableOpacity } from 'react-native';
import { G, Path } from 'react-native-svg';
import { InstaStat } from './InstaStat';
import { Description } from './Description';
import { Highlights } from './Highlights';
import { ProfileHeader } from './ProfileHeader';
import { ActionPanel } from './ActionPanel';

export function Profile() {
  const colorScheme = 'light';
  return (
    <ScrollView decelerationRate={'normal'}>
      <Box safeAreaTop>
        <ProfileHeader />
        <Description />
        <Highlights />
        <ActionPanel />
      </Box>
    </ScrollView>
  );
}
