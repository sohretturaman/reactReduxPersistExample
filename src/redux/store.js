import listReducer from '../redux/reducers/listReducer';
import {combineReducers, legacy_createStore as createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './reducers/authReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const newReducers = combineReducers({
  listReducer: listReducer,
  authReducer: authReducer,
});

const persistedReducer = persistReducer(persistConfig, newReducers);

export const store = createStore(persistedReducer); 
export const persistor = persistStore(store);
