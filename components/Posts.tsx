import * as React from 'react';
import { HStack, ScrollView, IconButton, VStack, Text } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import { CinzelText } from './StyledText';
import { Avatar } from 'native-base';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { IPost } from '../interfaces/sharedInterfaces';

export function Posts() {
  const posts = useSelector((state: RootState) => state.postsReducer.posts);

  return (
    <ScrollView decelerationRate={'normal'}>
      <VStack>
        {posts.map((post: IPost, idx: number) => {
          return (
            <VStack key={idx}>
              <Text>{post.title}</Text>
            </VStack>
          );
        })}
      </VStack>
    </ScrollView>
  );
}
