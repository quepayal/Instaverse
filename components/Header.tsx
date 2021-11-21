import * as React from 'react';
import { Heading, HStack, Box, Text } from 'native-base';
import { Link } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { CinzelText } from './StyledText';

export function Header() {
  const colorScheme = 'light';
  return (
    <Box safeAreaTop>
      <HStack px='5' py='3' justifyContent='space-between' alignItems='center'>
        <CinzelText style={{ fontSize: 25 }}>Instaverse</CinzelText>
        <Link to={{ screen: 'Root', params: { screen: 'Activity' } }}>
          <FontAwesome
            name='bell-o'
            size={24}
            color={Colors[colorScheme].text}
            style={{ marginRight: 10 }}
          />
        </Link>
      </HStack>
    </Box>
  );
}
