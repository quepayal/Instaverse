import React from 'react';
import {
  VStack,
  Input,
  Icon,
  Box,
  Avatar,
  FlatList,
  HStack,
  Spacer,
  Text,
  Button,
} from 'native-base';
import { G, Path } from 'react-native-svg';
import { StoryGrid } from '../components/StoryGrid';

export function SearchScreen() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Sujitha Mathur',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Anci Barroco',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'I will call today.',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
    },
  ];
  return (
    <Box safeAreaTop px={3} py={5} background='#FFFFFF' height='100%'>
      <VStack width='100%' space={5} alignItems='flex-start'>
        <Input
          placeholder='Search'
          variant='filled'
          width='100%'
          borderRadius='10'
          placeholderTextColor='gray.500'
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          borderWidth='0'
          InputLeftElement={
            <Icon color='#646464' marginLeft={2} marginTop={2}>
              <G>
                <Path d='M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z'></Path>
              </G>
            </Icon>
          }
        />
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
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color='coolGray.800'
                      bold
                    >
                      {item.fullName}
                    </Text>
                    <Text
                      color='coolGray.600'
                      _dark={{
                        color: 'warmGray.200',
                      }}
                    >
                      {item.recentText}
                    </Text>
                  </VStack>
                </HStack>
                <Spacer />
                <Icon marginLeft={10} size={10}>
                  <G>
                    <Path
                      d='M15,12c2.21,0 4,-1.79 4,-4s-1.79,-4 -4,-4 -4,1.79 -4,4 1.79,4 4,4zM6,10L6,7L4,7v3L1,10v2h3v3h2v-3h3v-2L6,10zM15,14c-2.67,0 -8,1.34 -8,4v2h16v-2c0,-2.66 -5.33,-4 -8,-4z'
                      fill='#646464'
                      scale={1.2}
                    ></Path>
                  </G>
                </Icon>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </VStack>
    </Box>
  );
}
