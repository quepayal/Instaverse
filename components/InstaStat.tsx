import * as React from 'react';
import { VStack } from 'native-base';
import { MontserratBoldText } from './StyledText';
import { IStat } from '../interfaces/sharedInterfaces';

export function InstaStat(props: IStat) {
  const colorScheme = 'light';
  return (
    <VStack space={2}>
      <MontserratBoldText style={{ fontSize: 20, color: '#646464' }}>
        {props.data}
      </MontserratBoldText>
      <MontserratBoldText style={{ fontSize: 12, color: '#646464' }}>
        {props.featureName}
      </MontserratBoldText>
    </VStack>
  );
}
