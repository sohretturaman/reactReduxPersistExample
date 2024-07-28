import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import {RouteName} from '../../config';
import Input from '../../components/Input';
import {signup} from '../../services/auth';

const Signup = ({navigation}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [form, setForm] = useState({
    name: '',
    username: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    confPassword: '',
  });
  const handleSignup = () => {
    console.log('signup data', form.email, form.password);
    if (
      form.username &&
      form.email &&
      form.password &&
      form.name &&
      form.surname &&
      form.phone
    ) {
      signup(form).then(res => console.log('respose from signup', res));
    }
  };
  const onRegisterText = () => {
    navigation.navigate(RouteName.HOMEPAGE);
  };

  const handleOnChange = (field, text) => {
    setForm(prev => ({...prev, [field]: text}));
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <View style={styles.titleWrapper}></View>

            {/**login Form starts here */}
            <View style={styles.innerContainer}>
              <Input
                title={'Kullanıcı Adı'}
                value={form.username}
                onChangeText={value => handleOnChange('username', value)}
              />
              <Input
                title={'Adınız'}
                value={form.name}
                onChangeText={value => handleOnChange('name', value)}
              />
          
              <Input
                title={'E-Posta'}
                value={form.email}
                onChangeText={value => handleOnChange('email', value)}
              />
              <Input
                title={'Telefon Numarası'}
                value={form.phone}
                onChangeText={value => handleOnChange('phone', value)}
                keyboardType={'phone-pad'}
              />
              <Input
                title={'Parola'}
                value={form.password}
                onChangeText={value => handleOnChange('password', value)}
                secureTextEntry={true}
              />
              <Input
                title={'Parolayı Doğrula'}
                value={form.confPassword}
                onChangeText={value => handleOnChange('confPassword', value)}
                secureTextEntry={true}
              />

              <Button title={'kayıt ol'} onPress={handleSignup} />
              <View style={styles.registerWrapper}>
                <TouchableOpacity
                  onPress={onRegisterText}
                  style={styles.pressableText}>
                  <Text style={styles.firstText}>Üye Değil misin? </Text>
                  <Text style={styles.secondText}>Üye Ol</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Signup;
