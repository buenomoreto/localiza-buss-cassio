// eslint-disable-next-line import/no-extraneous-dependencies
import { useRoute } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('screen');

export default function Reminder() {
  const params = useRoute();
  const [address, setAddress] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${params.params.latitude}&lon=${params.params.longitude}&format=json`).then(
      async (request) => {
        const data = await request.json();
        setAddress(data);
      },
    );
  }, [params]);
  return (
    <View style={styles.container}>
      <View style={styles.containerReminder}>
        <View style={styles.containerReminderRow}>
          <View style={styles.containerReminderRowChildren}>
            <Icon name="bell" size={35} color="#00283B" />
            {title === ''
            && (
            <TextInput
              placeholderTextColor="#00283B"
              onChangeText={setTitle}
              value={title}
              placeholder="Dígite nome do Lembrete"
            />
            )}
            {title !== '' && <Text style={styles.containerReminderText}>{title}</Text>}
          </View>
          <Icon name="close" size={35} color="#00283B" />
        </View>
        <View>
          <View style={styles.textInfos}>
            <Text style={styles.bold}>
              Rua:
            </Text>
            <Text>
              {address?.address.road}
            </Text>
          </View>
          <View style={styles.textInfos}>
            <Text style={styles.bold}>
              Bairro:
            </Text>
            <Text>
              {address?.address.neighbourhood}
            </Text>
          </View>
          <View style={styles.textInfos}>
            <Text style={styles.bold}>
              Horário de chegada:
            </Text>
            <Text>
              { params?.params.night[0].dateTime }
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
  },
  containerReminder: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    width: width - 50,
  },
  containerReminderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  containerReminderRowChildren: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerReminderText: {
    fontSize: 16,
    color: '#00283B',
    marginLeft: 15,
  },
  textInfos: {
    marginBottom: 10,
    fontSize: 12,
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 14,
  },
});
