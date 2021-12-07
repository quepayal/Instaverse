import * as React from 'react';
import { VStack } from 'native-base';
import { MontserratBoldText } from './StyledText';

export function Description() {
  const colorScheme = 'light';
  return (
    <VStack space={2} px='5'>
      <MontserratBoldText style={{ fontSize: 18, color: '#646464' }}>
        Payal
      </MontserratBoldText>
      <MontserratBoldText style={{ fontSize: 12, color: '#646464' }}>
        Everything is designed.
      </MontserratBoldText>
    </VStack>
  );
}
