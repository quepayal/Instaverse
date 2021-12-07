import * as React from 'react';
import { Box } from 'native-base';
import { ScrollView } from 'react-native';
import { Description } from './Description';
import { Highlights } from './Highlights';
import { ProfileHeader } from './ProfileHeader';
import { ActionPanel } from './ActionPanel';

export function Profile() {
  const colorScheme = 'light';
  return (
    <ScrollView decelerationRate={'normal'}>
      <Box safeAreaTop background='#FFFFFF'>
        <ProfileHeader />
        <Description />
        <Highlights />
        <ActionPanel />
      </Box>
    </ScrollView>
  );
}
