import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Hours from '../BusTop';
import BusTop from '../Hours';

export default function PointsInfos() {
  return (
    <SafeAreaView>
      <BusTop />
      <Hours />
    </SafeAreaView>
  );
}
