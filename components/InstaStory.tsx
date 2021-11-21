import * as React from 'react';
import { HStack, ScrollView, IconButton, VStack } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import { MontserratText } from './StyledText';
import { Avatar } from 'native-base';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

export function InstaStory() {
  const following = useSelector(
    (state: RootState) => state.userReducer.following
  );

  return (
    <ScrollView
      horizontal={true}
      decelerationRate={'normal'}
      style={{ maxHeight: 120, height: 120 }}
      showsHorizontalScrollIndicator={false}
    >
      <HStack space={4} px={5}>
        <VStack alignItems='center'>
          <IconButton
            style={{ borderRadius: 50, height: 50, backgroundColor: '#f15f79' }}
            variant='solid'
            _icon={{
              as: EvilIcons,
              name: 'camera',
            }}
          />
          <MontserratText style={{ fontSize: 10 }}>+Add</MontserratText>
        </VStack>

        {following.map((user: string, idx: number) => {
          return (
            <VStack alignItems='center' key={idx}>
              <Avatar
                bg='green.500'
                mr='1'
                source={{
                  uri: 'https://miro.medium.com/fit/c/64/64/1*VtytdUkVgindIMV4vFrK5g.jpeg',
                }}
              >
                RS
                <Avatar.Badge bg='#0078d4' />
              </Avatar>
              <MontserratText style={{ fontSize: 10 }}>{user}</MontserratText>
            </VStack>
          );
        })}
      </HStack>
    </ScrollView>
  );
}
