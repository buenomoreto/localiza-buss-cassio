import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
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
  info: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    paddingVertical: 15,
    width,
  },

});
