import {Dimensions, StyleSheet} from 'react-native';


const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginVertical: width * 0.03,
    alignSelf: 'center',
    width: width * 0.85,
    height: width * 0.2,
    
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.02,
  },
  title: {
    fontSize: width * 0.036,
    fontWeight: '400',
    color: '#333333',
  },
  forgotPassword: {
    fontSize: width * 0.036,
    fontWeight: '400',
    color: 'blue',
  },
  inputWrapper: {
    borderRadius: width * 0.01,
    height: width * 0.12,
    width: width * 0.85,
    borderColor: 'black',
    borderwidth: width * 0.05,
    justifyContent: 'center',
    backgroundColor:'#E5E5E5'
  },
  textInput: {
    borderRadius: width * 0.01,
    height: width * 0.11,
    width: '100%',
  },
});

export default styles;