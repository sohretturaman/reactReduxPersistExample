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
} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import {RouteName} from '../../config';
import Input from '../../components/Input';
import {login} from '../../services/auth';
import {onRegister, onLogin} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [form, setForm] = useState({username: '', password: ''});
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log('login data', form.username, form.password);
    if (form.username && form.password) {
      //login(form).then(res => console.log('respose from login', res)); // **Api Trial
      dispatch(onLogin(form));
      navigation.navigate('MainStack', {screeen: RouteName.HOMEPAGE});
    }
  };
  const onRegisterText = () => {
    navigation.navigate(RouteName.SIGNUP);
  };

  const handleOnChange = (field, text) => {
    setForm(prev => ({...prev, [field]: text}));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoWrapper}>
            {/* <Image source={main_logo} style={styles.logo} /> */}
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.mainText}> Giriş</Text>
            <Text style={styles.subText}>
              Hesabınıza erişmek için kimlik bilgilerinizi girin.{' '}
            </Text>
          </View>
          <Button title="Google ile giriş yap " />
          {/**login Form starts here */}
          <View style={styles.innerContainer}>
            <Input
              title={'Kullanıcı Adı'}
              onChangeText={value => handleOnChange('username', value)}
              value={form.username}
            />
            <Input
              title={'Password'}
              value={form.password}
              onChangeText={value => handleOnChange('password', value)}
              secureTextEntry={true}
            />

            <View style={styles.rememberMeWrapper}>
              <TouchableOpacity
                onPress={() => setIsClicked(!isClicked)}
                style={[styles.checkButton]}
              />
              <Text style={styles.rememberMe}>Beni Hatırla</Text>
            </View>
            <Button title={'Giriş Yap'} onPress={handleLogin} />
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
  );
};

export default Login;
