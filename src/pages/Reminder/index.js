// eslint-disable-next-line import/no-extraneous-dependencies
import { useRoute } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../axios';
import postItem, { deleteItem } from '../../services';

const { width } = Dimensions.get('screen');

const ModalPopUp = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  useEffect(() => {
    toggleModal();
  }, [visible]);

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <View style={[styles.modal]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};
export default function Reminder() {
  const {
    params: {
      latitude, longitude, ref, night: [{ dateTime }],
    },
  } = useRoute();
  const [address, setAddress] = useState();
  const [title, setTitle] = useState(String);
  const [listing, setListing] = useState();
  const [visible, setVisible] = useState(false);

  function clickPost() {
    postItem(
      title, latitude, longitude, ref, dateTime,
    );
    setVisible(false);
  }

  useEffect(() => {
    api.get('/query').then((response) => {
      setListing(response.data);
    }).catch((error) => {
      alert(error.message);
    });
    if (typeof listing !== 'undefined') {
      listing.forEach((item) => {
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${item.rua}&lon=${item.bairro}&format=json`).then(
          async (request) => {
            const data = await request.json();
            setAddress(data);
          },
        );
      });
    }
    deleteItem();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => setVisible(true)} style={styles.btnLembrete}>
        <Text>Criar lembrete</Text>
      </TouchableHighlight>
      <ModalPopUp visible={visible}>
        <View style={{ alignItems: 'center' }}>
          <View>
            <Text style={styles.titleLembrete}>Criar lembrete</Text>
            <View style={styles.containerInputRow}>
              <TextInput
                placeholderTextColor="#00283B"
                onChangeText={setTitle}
                value={title}
                placeholder="Dígite nome do Lembrete"
              />
            </View>
            <View>
              <TouchableHighlight style={styles.button} onPress={() => clickPost()}>
                <Text style={styles.buttonText}>Ok</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ModalPopUp>
      { listing
        && listing.map((item) => (
          <View style={styles.containerReminder} key={item.id}>
            <View style={styles.containerReminderRow}>
              <View style={styles.containerReminderRowChildren}>
                <Icon name="bell" size={35} color="#00283B" />
                <Text style={styles.containerReminderText}>{item.nome}</Text>
              </View>
              <TouchableHighlight onPress={() => deleteItem(item.id)}>
                <Icon name="close" size={35} color="#00283B" />
              </TouchableHighlight>
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
              {
              item.bairro.length > 0 && (
              <View style={styles.textInfos}>
                <Text style={styles.bold}>
                  Bairro:
                </Text>
                <Text>
                  {address?.address.neighbourhood}
                </Text>
              </View>
              )
              }
              {
              item.ref.length > 0 && (
              <View style={styles.textInfos}>
                <Text style={styles.bold}>
                  Ref:
                </Text>
                <Text>
                  { item.ref }
                </Text>
              </View>
              )
            }
              <View style={styles.textInfos}>
                <Text style={styles.bold}>
                  Horário de chegada:
                </Text>
                <Text>
                  { item.horarioChegada }
                </Text>
              </View>
            </View>
          </View>
        ))}

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
    width: width - 30,
    position: 'relative',
    marginVertical: 20,
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
  containerInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'silver',
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: '#00283B',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginHorizontal: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
  titleLembrete: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  btnLembrete: {
    backgroundColor: '#fff',
    padding: 10,
    width: 130,
    borderRadius: 30,
    alignItems: 'center',
  },
});
