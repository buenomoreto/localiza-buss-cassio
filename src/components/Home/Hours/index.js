// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { hours } from '../../../assets/css/Hours';
import BusSvg from '../../../assets/img/bus.svg';

export default function Hours({ marker }) {
  const navigation = useNavigation();
  return (
    <View style={hours.containerHours}>
      <View style={hours.containerTop}>
        <BusSvg style={hours.busSvg} />
        <Text style={hours.topText}>
          Ponto mais proximo
        </Text>
      </View>
      <View>
        <Text style={hours.timeCourseText}>
          Noite
          <Text style={hours.timeCourseTextBold}> 18h - 23h</Text>
        </Text>
        <View style={hours.containerHoursStop}>
          <View style={hours.boxHoursStop}>
            <Text style={hours.TextHours}>{marker.night[0].dateTime}</Text>
            <View style={hours.boxHoursStopText}><Text>Horario de chegada</Text></View>
          </View>
          <View style={hours.boxHoursReminder}>
            <Text><Icon name="bell-outline" size={35} color="#fff" /></Text>
            <View style={hours.boxHoursReminderText}><Text onPress={() => { navigation.navigate('Reminder', marker); }}>Criar lembrete</Text></View>
          </View>
        </View>
      </View>
    </View>
  );
}
