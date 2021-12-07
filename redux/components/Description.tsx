import * as React from 'react';
import { HStack, Box, Icon, Avatar, VStack } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MontserratBoldText, MontserratText } from './StyledText';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';
import { G, Path } from 'react-native-svg';
import { IStat } from '../interfaces/sharedInterfaces';

export function Description() {
  const colorScheme = 'light';
  return (
    <VStack space={2} px='5'>
      <MontserratBoldText style={{ fontSize: 18, color: '#646464' }}>
        Payal
      </MontserratBoldText>
      <MontserratBoldText style={{ fontSize: 12, color: '#646464' }}>
        Everything is designed.
      </MontserratBoldText>
    </VStack>
  );
}
