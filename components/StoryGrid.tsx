import * as React from 'react';
import { AspectRatio, Image, Flex } from 'native-base';

export function StoryGrid() {
  const colorScheme = 'light';
  return (
    <Flex
      alignItems={'flex-start'}
      flexDirection={'row'}
      flexWrap={'wrap'}
      overflow='hidden'
    >
      <AspectRatio w='50%' ratio={4 / 3}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/3e/31/a6/3e31a6290262ba3eb3cb5540fa2ad14b.jpg',
          }}
          alt='Alternate Text'
          style={{ borderRadius: 20 }}
        />
      </AspectRatio>
      <AspectRatio w='50%' ratio={4 / 3}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/3e/31/a6/3e31a6290262ba3eb3cb5540fa2ad14b.jpg',
          }}
          alt='Alternate Text'
          style={{ borderRadius: 20 }}
        />
      </AspectRatio>
      <AspectRatio w='50%' ratio={4 / 3}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/3e/31/a6/3e31a6290262ba3eb3cb5540fa2ad14b.jpg',
          }}
          alt='Alternate Text'
          style={{ borderRadius: 20 }}
        />
      </AspectRatio>
      <AspectRatio w='50%' ratio={4 / 3}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/3e/31/a6/3e31a6290262ba3eb3cb5540fa2ad14b.jpg',
          }}
          alt='Alternate Text'
          style={{ borderRadius: 20 }}
        />
      </AspectRatio>
      <AspectRatio w='50%' ratio={4 / 3}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/3e/31/a6/3e31a6290262ba3eb3cb5540fa2ad14b.jpg',
          }}
          alt='Alternate Text'
          style={{ borderRadius: 20 }}
        />
      </AspectRatio>
      <AspectRatio w='50%' ratio={4 / 3}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/3e/31/a6/3e31a6290262ba3eb3cb5540fa2ad14b.jpg',
          }}
          alt='Alternate Text'
          style={{ borderRadius: 20 }}
        />
      </AspectRatio>
    </Flex>
  );
}
