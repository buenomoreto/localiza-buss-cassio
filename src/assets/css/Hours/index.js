import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

// eslint-disable-next-line import/prefer-default-export
export const hours = StyleSheet.create({
  containerHours: {
    paddingTop: 20,
    paddingBottom: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width - 20,
    minHeight: 280,
  },
  containerTop: {
    width: width - 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F3F0F0',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  busSvg: {
    marginRight: 10,
  },
  topText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeCourseText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  timeCourseTextBold: {
    fontWeight: 'bold',
  },
  containerHoursStop: {
    width: width - 70,
    backgroundColor: '#00283B',
    padding: 15,
    borderRadius: 20,
    color: '#fff',
    marginBottom: 15,
  },
  boxHoursStop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  boxHoursStopText: {
    backgroundColor: '#fff',
    maxWidth: '72%',
    width: ' 100%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
  },
  TextHours: {
    fontSize: 14,
    color: '#fff',
  },
  boxHoursReminder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxHoursReminderText: {
    backgroundColor: '#fff',
    maxWidth: '72%',
    width: ' 100%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
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
    color: '#AAAAAA',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  hoursText: {
    fontSize: 14,
    color: '#FFC55A',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
