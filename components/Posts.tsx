import * as React from 'react';
import {
  HStack,
  ScrollView,
  IconButton,
  VStack,
  Text,
  Image,
  Center,
  AspectRatio,
  Box,
} from 'native-base';
import {
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { MontserratText } from './StyledText';
import { Avatar } from 'native-base';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { IPost } from '../interfaces/sharedInterfaces';

export function Posts() {
  const posts = useSelector((state: RootState) => state.postsReducer.posts);
  const colorScheme = 'light';
  return (
    <ScrollView decelerationRate={'normal'}>
      <Center flex={1} px={5}>
        <VStack space={5}>
          {posts.map((post: IPost, idx: number) => {
            return (
              <VStack key={idx} space={5}>
                <HStack justifyContent={'space-between'}>
                  <HStack
                    space={3}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Avatar
                      bg='green.500'
                      mr='1'
                      size='8'
                      source={{
                        uri: 'https://miro.medium.com/fit/c/64/64/1*VtytdUkVgindIMV4vFrK5g.jpeg',
                      }}
                    ></Avatar>
                    <VStack>
                      <MontserratText style={{ fontSize: 10 }}>
                        Payal
                      </MontserratText>
                      <MontserratText style={{ fontSize: 8 }}>
                        {post.createdAt}
                      </MontserratText>
                    </VStack>
                  </HStack>

                  <IconButton
                    variant='ghost'
                    _icon={{
                      as: Feather,
                      name: 'more-vertical',
                      size: '5',
                    }}
                  />
                </HStack>
                <Box rounded={'2xl'} overflow='hidden'>
                  <AspectRatio w='100%' ratio={16 / 9}>
                    <Image
                      source={{
                        uri: 'https://images.unsplash.com/photo-1637355054940-b18363493271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                      }}
                      alt='Alternate Text'
                      style={{ borderRadius: 20 }}
                    />
                  </AspectRatio>
                </Box>

                <HStack justifyContent={'space-between'}>
                  <HStack space={3} justifyContent={'space-between'}>
                    <HStack space={2} alignItems={'center'}>
                      <IconButton
                        variant='ghost'
                        _icon={{
                          as: FontAwesome,
                          name: 'heart-o',
                          size: '5',
                        }}
                      />

                      <MontserratText style={{ fontSize: 12 }}>
                        {post.likes.length}
                      </MontserratText>
                    </HStack>
                    <HStack space={2} alignItems={'center'}>
                      <IconButton
                        variant='ghost'
                        _icon={{
                          as: Octicons,
                          name: 'comment',
                          size: '5',
                        }}
                      />

                      <MontserratText style={{ fontSize: 12 }}>
                        {post.likes.length}
                      </MontserratText>
                    </HStack>
                  </HStack>

                  <IconButton
                    variant='ghost'
                    _icon={{
                      as: Fontisto,
                      name: 'bookmark',
                      size: '5',
                    }}
                  />
                </HStack>
              </VStack>
            );
          })}
        </VStack>
      </Center>
    </ScrollView>
  );
}
