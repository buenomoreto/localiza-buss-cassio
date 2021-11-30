import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { hours } from '../../../assets/css/Hours';

export default function Hours() {
  return (
    <View style={hours.containerHours}>
      <View style={hours.containerTop}>
        <Text style={hours.topText}>
          Ponto mais proximo
        </Text>
      </View>
      <View>
        <Text style={hours.timeCourseText}>
          Tarde
          <Text style={hours.timeCourseTextBold}> 12h - 18h</Text>
        </Text>
        <View style={hours.containerHoursStop}>
          <View style={hours.boxHoursStop}>
            <Text style={hours.TextHours}>13:00</Text>
            <View style={hours.boxHoursStopText}><Text>Horario de chegada</Text></View>
          </View>
          <View style={hours.boxHoursReminder}>
            <Text><Icon name="bell-outline" size={35} color="#fff" /></Text>
            <View style={hours.boxHoursReminderText}><Text>Criar lembrete</Text></View>
          </View>
        </View>
      </View>
      <View style={hours.containerLocalAndHours}>
        <View style={hours.boxLocal}>
          <TouchableOpacity>
            <View style={hours.boxLocalText}>
              <Icon name="map-marker-outline" size={30} color="#AAAAAA" />
              <Text style={hours.localText}>Local</Text>
            </View>

          </TouchableOpacity>
        </View>
        <View style={hours.boxHours}>
          <TouchableOpacity>
            <TouchableOpacity>
              <View style={hours.boxHoursText}>
                <Icon name="clock-time-four-outline" size={30} color="#FFC55A" />
                <Text style={hours.hoursText}>Horário</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
