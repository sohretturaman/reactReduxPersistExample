import React from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteList} from '../../redux/actions';

const HomeScreen = ({navigation}) => {
  const mylist = useSelector(state => state.listReducer.noteList);
  const myUser = useSelector(state => state.authReducer.user);
  console.log("my user ", myUser);
  const dispatch = useDispatch();

  const handleDeleteNote = index => {
    dispatch(deleteList(index));
  };
  console.log(mylist, 'mylist');

  return (
    <View style={styles.container}>
      {mylist.length === 0 ? (
        <Text style={styles.noNotesText}>Henüz not yok</Text>
      ) : (
        mylist?.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.noteContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.detailText}>{item.detail}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleDeleteNote(index)}
              style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Sil</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
      <Button
        title="Not Ekle"
        onPress={() => navigation.navigate('NotePage')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noNotesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    width: '90%',
    borderRadius: 5,
  },
  noteContainer: {
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailText: {
    marginTop: 5,
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
