import React, { useState, useEffect } from 'react';
import { ImageBackground, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Box, HStack, Icon, IconButton, Input, VStack } from 'native-base';
import { G, Path } from 'react-native-svg';
import * as WebBrowser from 'expo-web-browser';
import { MontserratBoldText } from '../components/StyledText';
import { EvilIcons } from '@expo/vector-icons';

export function AddPost() {
  const [image, setImage] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  function handleHelpPress() {
    WebBrowser.openBrowserAsync('https://github.com/quepayal/Instaverse');
  }

  return (
    <Box safeAreaTop px='5' py='5' background='#FFFFFF' height='100%'>
      <VStack space={10}>
        <HStack justifyContent='space-between' alignItems='center'>
          <MontserratBoldText style={{ fontSize: 25, color: '#646464' }}>
            What's new?
          </MontserratBoldText>
          <TouchableOpacity onPress={handleHelpPress}>
            <Icon>
              <G>
                <Path
                  d='M4.01,6.03l7.51,3.22 -7.52,-1 0.01,-2.22m7.5,8.72L4,17.97v-2.22l7.51,-1M2.01,3L2,10l15,2 -15,2 0.01,7L23,12 2.01,3z'
                  fill='#646464'
                ></Path>
              </G>
            </Icon>
          </TouchableOpacity>
        </HStack>
        <Input variant='underlined' placeholder='Add caption' />
        <ImageBackground
          source={
            image
              ? { uri: image }
              : require('../assets/images/brigitte-tohm-Ko-boPSpCe0-unsplash.png')
          }
          style={{ width: '100%', height: 400, position: 'relative' }}
        >
          <IconButton
            onPress={pickImage}
            style={{
              position: 'absolute',
              borderRadius: 50,
              height: 50,
              width: 50,
              right: 5,
              bottom: 5,
            }}
            variant='solid'
            _icon={{
              as: EvilIcons,
              name: 'camera',
            }}
          />
        </ImageBackground>
      </VStack>
    </Box>
  );
}
