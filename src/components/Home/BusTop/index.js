import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { busTop } from '../../../assets/css/BusTop';
import BusSvg from '../../../assets/img/bus.svg';

export default function BusTop() {
  return (
    <View style={busTop.containerBusTop}>
      <View style={busTop.containerTop}>
        <BusSvg style={busTop.busSvg} />
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

    </View>
  );
}
