import * as React from 'react';
import { HStack, Stack, Icon } from 'native-base';
import { G, Path } from 'react-native-svg';
import { StoryGrid } from './StoryGrid';

export function ActionPanel() {
  const colorScheme = 'light';
  return (
    <Stack>
      <HStack px='10' py='2' justifyContent='space-between' alignItems='center'>
        <Icon size={10}>
          <G>
            <Path
              d='M3,5v14c0,1.1 0.89,2 2,2h6L11,3L5,3c-1.11,0 -2,0.9 -2,2zM19,3h-6v8h8L21,5c0,-1.1 -0.9,-2 -2,-2zM13,21h6c1.1,0 2,-0.9 2,-2v-6h-8v8z'
              fill='#646464'
              scale={1.2}
            ></Path>
          </G>
        </Icon>
        <Icon size={10}>
          <G>
            <Path
              d='M17,3L7,3c-1.1,0 -2,0.9 -2,2v16l7,-3 7,3L19,5c0,-1.1 -0.9,-2 -2,-2zM17,18l-5,-2.18L7,18L7,5h10v13z'
              fill='#646464'
              scale={1.2}
            ></Path>
          </G>
        </Icon>
        <Icon size={10}>
          <G>
            <Path
              d='M20,2H4C3,2 2,2.9 2,4v3.01C2,7.73 2.43,8.35 3,8.7V20c0,1.1 1.1,2 2,2h14c0.9,0 2,-0.9 2,-2V8.7c0.57,-0.35 1,-0.97 1,-1.69V4C22,2.9 21,2 20,2zM15,14H9v-2h6V14zM20,7H4V4h16V7z'
              fill='#646464'
              scale={1.2}
            ></Path>
          </G>
        </Icon>
      </HStack>
      <StoryGrid />
    </Stack>
  );
}
