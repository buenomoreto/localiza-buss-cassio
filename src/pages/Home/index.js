import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { home } from '../../assets/css/Home';
import points from '../../components/InfosRoutes/index.json';
import Local from '../../components/Home/BusTop';
import Hours from '../../components/Home/Hours';

export default function Home() {
  const [markers, setMarkers] = useState([]);
  
  useEffect(() => {
    setMarkers(points);
  });

  const region = {
    latitude: -21.2892,
    longitude: -50.3411,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

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
          coordinate={{
            latitude: item.point.latitude,
            longitude: item.point.longitude,
          }}
        >
          <View style={home.marker}>
            <Text><Icon name="bus-marker" size={30} color="#2BB673" /></Text>
          </View>
        </Marker>
      ))
    }
      </MapView>
      <Local />
      <Hours />
    </SafeAreaView>
  );
}
