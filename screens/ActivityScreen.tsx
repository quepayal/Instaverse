import React from 'react';
import {
  VStack,
  Box,
  Avatar,
  FlatList,
  HStack,
  Spacer,
  Text,
} from 'native-base';
import { MontserratBoldText } from '../components/StyledText';

enum ActivityType {
  System,
  Following,
  Like,
}

export function ActivityScreen() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      userName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      activityType: ActivityType.Following,
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      userName: 'Sujitha Mathur',
      timeStamp: '11:11 PM',
      activityType: ActivityType.Following,
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      userName: 'Anci Barroco',
      timeStamp: '6:22 PM',
      activityType: ActivityType.Like,
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      userName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      activityType: ActivityType.Like,
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      userName: 'Kiara',
      timeStamp: '12:47 PM',
      activityType: ActivityType.Like,
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];

  const activity = [
    "There's currently a technical issue affecting Instaverse.",
    'started following you.',
    'liked your post.',
  ];

  return (
    <Box safeAreaTop px={3} py={5} background='#FFFFFF' height='100%'>
      <VStack width='100%' space={5} alignItems='flex-start'>
        <HStack px={2}>
          <MontserratBoldText style={{ fontSize: 25, color: '#646464' }}>
            Activity
          </MontserratBoldText>
        </HStack>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth='1'
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor='coolGray.200'
              pl='4'
              pr='5'
              py='2'
            >
              <HStack space={12} justifyContent='space-between'>
                <HStack space={3}>
                  <Avatar
                    size='48px'
                    source={{
                      uri: item.avatarUrl,
                    }}
                  />
                  <HStack space={1}>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color='coolGray.800'
                      bold
                    >
                      {item.userName}
                    </Text>
                    <Text
                      color='coolGray.600'
                      _dark={{
                        color: 'warmGray.200',
                      }}
                    >
                      {activity[item.activityType]}
                    </Text>
                  </HStack>
                </HStack>
                <Spacer />
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </VStack>
    </Box>
  );
}
