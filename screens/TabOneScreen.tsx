import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { InstaStory } from '../components/InstaStory';
import { Posts } from '../components/Posts';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'Home'>) {
  return (
    <>
      <Header />
      <InstaStory />
      <Posts />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
