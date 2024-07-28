import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addlist,deleteList } from '../redux/actions';

const ListComp = props => {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const mylist = useSelector(state => state.listReducer.noteList);
  console.log('mylist', mylist);

  const handleAddNote = () => {
    if (note.trim() && title.trim()) {
      dispatch(addlist({title, detail: note}));
      setNote('');
      setTitle('');
      setIsAdding(false);
    }
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteList(index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {mylist?.length === 0 ? (
          <Text style={styles.noNotesText}>Henüz not yok</Text>
        ) : (
          mylist?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => handleDeleteNote(index)}
            >
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.detailText}>{item.detail}</Text>
              <Button title="Sil" onPress={() => handleDeleteNote(index)} />
            </TouchableOpacity>
          ))
        )}
      </View>
      {isAdding ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Başlık"
          />
          <TextInput
            style={styles.input}
            value={note}
            onChangeText={setNote}
            placeholder="Detay"
          />
          <Button title="Kaydet" onPress={handleAddNote} />
        </View>
      ) : (
        <Button title="Yeni Not" onPress={() => setIsAdding(true)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  listContainer: {
    flex: 1,
  },
  noNotesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailText: {
    marginTop: 5,
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ListComp;
