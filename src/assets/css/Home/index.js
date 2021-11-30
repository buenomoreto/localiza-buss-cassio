import { StyleSheet, Dimensions } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const home = StyleSheet.create({
  containerHome: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
