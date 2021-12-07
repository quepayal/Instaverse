import * as React from 'react';
import { HStack, ScrollView, VStack } from 'native-base';
import { Avatar } from 'native-base';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { MontserratText } from './StyledText';

export function Highlights() {
  const following = useSelector(
    (state: RootState) => state.userReducer.following
  );

  return (
    <ScrollView
      horizontal={true}
      decelerationRate={'normal'}
      style={{ maxHeight: 120, height: 90 }}
      showsHorizontalScrollIndicator={false}
    >
      <HStack space={4} px={5} py={5}>
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
