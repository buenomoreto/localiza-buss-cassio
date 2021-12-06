// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Drawer,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Menu(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.containerMenu}>
      <DrawerContentScrollView {...props}>
        <View>
          <Drawer.Section>
            <DrawerItem
              icon={({}) => (
                <Icon
                  name="home-outline"
                  color="#fff"
                  size={22}
                />
              )}
              label="Home"
              labelStyle={{ color: '#fff' }}
              onPress={() => navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({}) => (
                <Icon
                  name="bell-outline"
                  color="#fff"
                  size={22}
                />
              )}
              label="Lembretes"
              labelStyle={{ color: '#fff' }}
              onPress={() => navigation.navigate('Reminder')}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMenu: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  containerSection: {
    color: '#fff',
    backgroundColor: '#fff',
  },
  containerUser: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: '#023F5C',
  },
  containerUserRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
  },
  profile: {
    fontSize: 14,
    color: '#BFBFBF',
  },
});
