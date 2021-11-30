import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { busTop } from '../../../assets/css/BusTop';

export default function BusTop() {
  return (
    <View style={busTop.containerBusTop}>
      <View style={busTop.containerTop}>
        <Text style={busTop.topText}>
          Ponto mais proximo
        </Text>
      </View>
      <View style={busTop.containerBusTopCenter}>
        <View style={busTop.containerBusTopCenterRoad}>
          <Text style={busTop.road}>
            Victor San Miguel
          </Text>
          <Text style={busTop.bairro}>
            Jardim Costa Rica
          </Text>
        </View>
        <View style={busTop.containerBusTopCenterRef}>
          <Text style={busTop.ref}>
            Próximo ao campo costa rica
          </Text>
        </View>
        <View style={busTop.containerBusTopCenterCity}>
          <Text style={busTop.city}>
            Birigüi/SP
          </Text>
          <Text style={busTop.price}>
            R$ 3,23
          </Text>
        </View>
      </View>
      <View style={busTop.containerLocalAndHours}>
        <View style={busTop.boxLocal}>
          <TouchableOpacity>
            <View style={busTop.boxLocalText}>
              <Icon name="map-marker-outline" size={30} color="#2BB673" />
              <Text style={busTop.localText}>Local</Text>
            </View>

          </TouchableOpacity>
        </View>
        <View style={busTop.boxHours}>
          <TouchableOpacity>
            <TouchableOpacity>
              <View style={busTop.boxHoursText}>
                <Icon name="clock-time-four-outline" size={30} color="#aaaa" />
                <Text style={busTop.hoursText}>Horário</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
