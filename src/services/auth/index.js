import {Post} from '../main';
import {LOGIN, REGISTER} from '../NetworkPaths';

const login = userObject => {
    console.log('login url and object', LOGIN, userObject);
  return Post(LOGIN, userObject);
};
const signup = userObject => {
  return Post(REGISTER, userObject);
};

export {login, signup};
