import * as React from 'react';

import { Text, TextProps } from './Themed';

export function CinzelText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'cinzel' }]} />;
}
