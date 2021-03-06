import React from 'react';
import { Path, Svg } from 'react-native-svg';

export function Upload() {
  return (
    <Svg viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z" />
    </Svg>
  );
}
