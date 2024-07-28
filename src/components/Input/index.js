import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const Input = props => {
  const {
    placeholder,
    secureTextEntry,
   // onSubmitEditing,
    title = 'E-Posta',
    value,
    keyboardType,
    onChangeText,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        {secureTextEntry && (
          <Text style={styles.forgotPassword}>Parolanı mı Unttun? </Text>
        )}
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
        //  onSubmitEditing={onSubmitEditing}
          style={styles.textInput}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;