import * as React from 'react';
import { HStack, Box, Icon, Avatar, Stack } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MontserratBoldText, MontserratText } from './StyledText';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';
import { G, Path } from 'react-native-svg';
import { InstaStat } from './InstaStat';
import { Description } from './Description';
import { Highlights } from './Highlights';

function handleHelpPress() {
  WebBrowser.openBrowserAsync('https://github.com/quepayal/Instaverse');
}

export function ProfileHeader() {
  const colorScheme = 'light';
  return (
    <Stack>
      <HStack px='5' py='5' justifyContent='space-between' alignItems='center'>
        <MontserratBoldText style={{ fontSize: 25, color: '#646464' }}>
          Quepayal
        </MontserratBoldText>
      </HStack>
      <HStack px='5' py='2' justifyContent='space-between' alignItems='center'>
        <Avatar
          mr='1'
          size='20'
          source={{
            uri: 'https://miro.medium.com/fit/c/64/64/1*VtytdUkVgindIMV4vFrK5g.jpeg',
          }}
        />
        <InstaStat data='54' featureName='Post' />
        <InstaStat data='34.6K' featureName='Follower' />
        <InstaStat data='236' featureName='Following' />
      </HStack>
    </Stack>
  );
}
