import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, Text, View, TouchableOpacity,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { home } from '../../assets/css/Home';
import points from '../../components/InfosRoutes/index.json';
import Local from '../../components/Home/BusTop';
import Hours from '../../components/Home/Hours';
import { busTop } from '../../assets/css/BusTop';
import PointsSvg from '../../assets/img/point.svg';

const HOURS = 'hours';
const LOCAL = 'local';

export default function Home() {
  const [markers, setMarkers] = useState([]);
  const [itemMark, setItemMark] = useState();
  const [popup, setPopup] = useState('');

  const region = {
    latitude: -21.2892,
    longitude: -50.3411,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    setMarkers(points);
  });

  return (
    <SafeAreaView style={home.containerHome}>
      <MapView
        region={region}
        style={home.map}
      >
        {
      markers.map((item) => (
        <Marker
          key={item.point.id}
          onPress={() => { setPopup(LOCAL); setItemMark(item.point); }}
          coordinate={{
            latitude: parseFloat(item.point.latitude),
            longitude: parseFloat(item.point.longitude),
          }}
        >
          <View>
            <PointsSvg />
          </View>
        </Marker>
      ))
    }
      </MapView>
      {popup === LOCAL && <Local marker={itemMark} />}
      {popup === HOURS && <Hours marker={itemMark} />}
      {
        (popup === LOCAL || popup === HOURS) && (
        <View style={home.info}>
          <View style={busTop.containerLocalAndHours}>
            <View style={busTop.boxLocal}>
              <TouchableOpacity onPress={() => setPopup(LOCAL)}>
                <View style={busTop.boxLocalText}>
                  <Icon name="map-marker-outline" size={30} color={popup === LOCAL ? '#2BB673' : '#aaaa'} />
                  <Text style={popup === LOCAL ? busTop.active : busTop.localText}>Local</Text>
                </View>

              </TouchableOpacity>
            </View>
            <View style={busTop.boxHours}>
              <TouchableOpacity onPress={() => setPopup(HOURS)}>
                <View style={busTop.boxHoursText}>
                  <Icon name="clock-time-four-outline" size={30} color={popup === HOURS ? '#FFC55A' : '#aaaa'} />
                  <Text style={popup === HOURS ? busTop.activeHours : busTop.hoursText}>
                    Horário
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        )
      }
    </SafeAreaView>
  );
}
