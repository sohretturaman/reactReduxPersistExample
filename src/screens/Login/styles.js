import {StyleSheet, Text, View, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width,
    height: height * 1,
    backgroundColor: 'white',
  },

  logo: {
    width: width * 0.5,
    height: width * 0.2,
  },
  mainText: {
    fontSize: width * 0.07,
    color: '#333333',
    textAlign: 'right',
  },
  subText: {
    fontSize: width * 0.03,
    color: 'gray',
    fontWeight: '400',
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: width * 0.85,
    height: width * 0.15,
    marginBottom: width * 0.05,
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: width * 0.85,
    marginTop: width * 0.1,
    marginBottom: width * 0.15,
  },

  //form styles
  innerContainer: {
    width: width,
    height: height * 0.5,
    alignItems: 'center',
    marginTop: width * 0.08,
  },
  rememberMeWrapper: {
    flexDirection: 'row',
    width: width * 0.85,
    marginVertical: width * 0.1,
  },

  checkButton: {
    width: width * 0.05,
    height: width * 0.05,
    borderColor: 'gray',
    borderwidth: width * 0.005,
    marginRight: width * 0.02,
    borderRadius: width * 0.01,
  },
  rememberMe: {
    fontSize: width * 0.036,
    fontWeight: '400',
    color: '#333333',
  },
  registerWrapper: {
    width: width * 0.85,
    height: width * 0.05,
    marginTop: width * 0.03,
  },
  pressableText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstText: {
    fontSize: width * 0.036,
    fontWeight: '400',
    color: '#333333',
  },
  secondText: {
    color: 'blue',
    marginLeft: width * 0.01,
  },
});

export default styles;
