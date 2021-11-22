import * as React from 'react';
import { HStack, Box, Icon, Avatar, VStack } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MontserratBoldText, MontserratText } from './StyledText';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';
import { G, Path } from 'react-native-svg';
import { IStat } from '../interfaces/sharedInterfaces';

export function InstaStat(props: IStat) {
  const colorScheme = 'light';
  return (
    <VStack space={2}>
      <MontserratBoldText style={{ fontSize: 20, color: '#646464' }}>
        {props.data}
      </MontserratBoldText>
      <MontserratBoldText style={{ fontSize: 12, color: '#646464' }}>
        {props.featureName}
      </MontserratBoldText>
    </VStack>
  );
}
