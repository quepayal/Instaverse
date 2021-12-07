import * as React from 'react';
import { HStack, Box, Icon } from 'native-base';
import { MontserratBoldText } from './StyledText';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native';
import { G, Path } from 'react-native-svg';

function handleHelpPress() {
  WebBrowser.openBrowserAsync('https://github.com/quepayal/Instaverse');
}

export function Header() {
  const colorScheme = 'light';
  return (
    <Box safeAreaTop>
      <HStack px='5' py='5' justifyContent='space-between' alignItems='center'>
        <MontserratBoldText style={{ fontSize: 25, color: '#646464' }}>
          Instaverse
        </MontserratBoldText>
        <TouchableOpacity onPress={handleHelpPress}>
          <Icon marginRight='-4'>
            <G>
              <Path
                d='M4.01,6.03l7.51,3.22 -7.52,-1 0.01,-2.22m7.5,8.72L4,17.97v-2.22l7.51,-1M2.01,3L2,10l15,2 -15,2 0.01,7L23,12 2.01,3z'
                fill='#646464'
              ></Path>
            </G>
          </Icon>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
}
