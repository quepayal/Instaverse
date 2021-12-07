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
  Icon,
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
import { MontserratBoldText, MontserratText } from './StyledText';
import { Avatar } from 'native-base';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { IPost } from '../interfaces/sharedInterfaces';
import { Header } from './Header';
import { InstaStory } from './InstaStory';
import { G, Path } from 'react-native-svg';

export function Posts() {
  const posts = useSelector((state: RootState) => state.postsReducer.posts);
  const colorScheme = 'light';
  return (
    <ScrollView decelerationRate={'normal'} background='#FFFFFF'>
      <Header />
      <InstaStory />
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
                      size='10'
                      source={{
                        uri: 'https://miro.medium.com/fit/c/64/64/1*VtytdUkVgindIMV4vFrK5g.jpeg',
                      }}
                    ></Avatar>
                    <VStack>
                      <MontserratText
                        style={{ fontSize: 10, color: '#646464' }}
                      >
                        Payal
                      </MontserratText>
                      <MontserratText style={{ fontSize: 8, color: '#747474' }}>
                        {post.createdAt}
                      </MontserratText>
                    </VStack>
                  </HStack>

                  <Icon marginRight='-4'>
                    <G>
                      <Path
                        d='M12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,10c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2zM12,16c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2z'
                        fill='#646464'
                      ></Path>
                    </G>
                  </Icon>
                </HStack>
                <Box rounded={'2xl'} overflow='hidden'>
                  <AspectRatio w='100%' ratio={4 / 3}>
                    <Image
                      source={{
                        uri: 'https://i.pinimg.com/736x/3e/31/a6/3e31a6290262ba3eb3cb5540fa2ad14b.jpg',
                      }}
                      alt='Alternate Text'
                      style={{ borderRadius: 20 }}
                    />
                  </AspectRatio>
                </Box>

                <HStack justifyContent={'space-between'}>
                  <MontserratBoldText
                    style={{ fontSize: 20, color: '#646464' }}
                  >
                    Multiverse
                  </MontserratBoldText>
                  <HStack space={3} justifyContent={'space-between'}>
                    <HStack space={1} alignItems={'center'}>
                      <Icon>
                        <G>
                          <Path
                            d='M19.66,3.99c-2.64,-1.8 -5.9,-0.96 -7.66,1.1 -1.76,-2.06 -5.02,-2.91 -7.66,-1.1 -1.4,0.96 -2.28,2.58 -2.34,4.29 -0.14,3.88 3.3,6.99 8.55,11.76l0.1,0.09c0.76,0.69 1.93,0.69 2.69,-0.01l0.11,-0.1c5.25,-4.76 8.68,-7.87 8.55,-11.75 -0.06,-1.7 -0.94,-3.32 -2.34,-4.28zM12.1,18.55l-0.1,0.1 -0.1,-0.1C7.14,14.24 4,11.39 4,8.5 4,6.5 5.5,5 7.5,5c1.54,0 3.04,0.99 3.57,2.36h1.87C13.46,5.99 14.96,5 16.5,5c2,0 3.5,1.5 3.5,3.5 0,2.89 -3.14,5.74 -7.9,10.05z'
                            fill='#646464'
                          ></Path>
                        </G>
                      </Icon>

                      <MontserratText style={{ fontSize: 12 }}>
                        {/* {post.likes.length} */}
                      </MontserratText>
                    </HStack>
                    <HStack space={1} alignItems={'center'}>
                      <Icon marginRight='-2'>
                        <G>
                          <Path
                            d='M17,3L7,3c-1.1,0 -2,0.9 -2,2v16l7,-3 7,3L19,5c0,-1.1 -0.9,-2 -2,-2zM17,18l-5,-2.18L7,18L7,5h10v13z'
                            fill='#646464'
                          ></Path>
                        </G>
                      </Icon>
                    </HStack>
                  </HStack>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
      </Center>
    </ScrollView>
  );
}
