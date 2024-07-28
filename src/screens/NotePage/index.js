import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addlist } from '../../redux/actions';

const NotePage = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (title.trim() && note.trim()) {
      dispatch(addlist({ title, detail: note }));
      setTitle('');
      setNote('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Başlık"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Not"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Kaydet" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default NotePage;
