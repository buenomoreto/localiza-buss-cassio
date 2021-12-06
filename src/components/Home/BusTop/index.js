import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { busTop } from '../../../assets/css/BusTop';
import BusSvg from '../../../assets/img/bus.svg';
import PointsSvg from '../../../assets/img/point.svg';

export default function BusTop({ marker }) {
  const [address, setAddress] = useState();

  useEffect(() => {
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${marker.latitude}&lon=${marker.longitude}&format=json`).then(
      async (request) => {
        const data = await request.json();
        setAddress(data);
      },
    );
  }, [marker]);
  return (
    <View style={busTop.containerBusTop}>
      <View style={busTop.containerTop}>
        <BusSvg style={busTop.busSvg} />
        <Text style={busTop.topText}>
          Ponto mais proximo
        </Text>
      </View>
      <View style={busTop.containerBusTopCenter}>
        <View style={busTop.containerRow}>
          <View style={busTop.containerBusTopCenterRoad}>
            <Text style={busTop.road}>
              {address?.address.road}
            </Text>
            <Text style={busTop.bairro}>
              {address?.address.neighbourhood}
            </Text>
          </View>
          <View style={busTop.containerRowPoint}>
            <PointsSvg />
          </View>
        </View>
        <View style={busTop.containerBusTopCenterRef}>
          <Text style={busTop.ref}>
            { marker.ref }
          </Text>
        </View>
        <View style={busTop.containerBusTopCenterCity}>
          <Text style={busTop.city}>
            {address?.address.city }
            {' '}
            {address?.address.state}
          </Text>
          <Text style={busTop.price}>
            { `R$${marker.price.toFixed(2)}` }
          </Text>
        </View>
      </View>

    </View>
  );
}
