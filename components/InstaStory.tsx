import * as React from 'react';
import { HStack, ScrollView, IconButton, VStack } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import { CinzelText } from './StyledText';
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
      style={{ maxHeight: 50 }}
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
          <CinzelText style={{ fontSize: 10 }}>+Add</CinzelText>
        </VStack>

        {following.map((user: string, idx: number) => {
          return (
            <VStack alignItems='center'>
              <Avatar
                key={idx}
                bg='green.500'
                mr='1'
                source={{
                  uri: 'https://miro.medium.com/fit/c/64/64/1*VtytdUkVgindIMV4vFrK5g.jpeg',
                }}
              >
                RS
                <Avatar.Badge bg='#0078d4' />
              </Avatar>
              <CinzelText style={{ fontSize: 10 }}>{user}</CinzelText>
            </VStack>
          );
        })}
      </HStack>
    </ScrollView>
  );
}
