/* eslint-disable prettier/prettier */
import {Platform} from 'react-native';

let URI = 'http://192.168.1.1:5000';

if (Platform.OS === 'ios') {
  URI = 'https://threads-clone-ten.vercel.app/api/v1';
} else {
  URI = 'https://threads-clone-ten.vercel.app/api/v1';
}

export {URI};
