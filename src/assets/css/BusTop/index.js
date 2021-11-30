import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

// eslint-disable-next-line import/prefer-default-export
export const busTop = StyleSheet.create({
  containerBusTop: {
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width - 20,
  },
  containerTop: {
    width: width - 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F3F0F0',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  topText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },

  containerBusTopCenter: {
    width: width - 70,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    color: '#fff',
    marginBottom: 15,
    minHeight: 140,
    borderColor: '#00283B',
    borderWidth: 1,
  },
  containerBusTopCenterRoad: {
    marginBottom: 20,
  },
  containerBusTopCenterRef: {
    marginBottom: 20,
  },
  ref: {
    fontSize: 12,
  },
  road: {
    fontSize: 14,
  },
  containerBusTopCenterCity: {
    flexDirection: 'row',
    maxWidth: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  city: {
    fontSize: 16,
  },
  price: {
    color: '#2BB673',
    borderColor: '#2BB673',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 14,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  containerLocalAndHours: {
    borderTopColor: '#C4C4C4',
    borderTopWidth: 1,
    width: ' 100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  boxLocal: {
    marginRight: 100,
  },
  boxHours: {
  },
  boxLocalText: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  boxHoursText: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  localText: {
    fontSize: 14,
    color: '#2BB673',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  hoursText: {
    fontSize: 14,
    color: '#AAAA',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
