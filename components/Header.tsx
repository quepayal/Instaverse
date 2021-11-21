import * as React from 'react';
import { HStack, Box } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MontserratText } from './StyledText';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';

function handleHelpPress() {
  WebBrowser.openBrowserAsync('https://github.com/quepayal/Instaverse');
}

export function Header() {
  const colorScheme = 'light';
  return (
    <Box safeAreaTop>
      <HStack px='5' py='3' justifyContent='space-between' alignItems='center'>
        <MontserratText style={{ fontSize: 25 }}>Instaverse</MontserratText>
        <TouchableOpacity onPress={handleHelpPress}>
          <FontAwesome
            name='github'
            size={24}
            color={Colors[colorScheme].text}
          />
        </TouchableOpacity>
      </HStack>
    </Box>
  );
}
