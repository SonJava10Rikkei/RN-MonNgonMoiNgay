import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import SCREEN from '../navigators/RouteKey';

const useLogin = () => {
  const Navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [useSecureTextEntry, setUseSecureTextEntry] = useState(true);

  const onChangeUserName = (value: string) => {
    setUserName(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onPressImRight = () => {
    setUseSecureTextEntry(!useSecureTextEntry); // Đảo ngược trạng thái
  };

  const onSubmit = () => {
    // @ts-ignore
    Navigation.navigate(SCREEN.BOTTOM_TAB);
  };
  return {
    userName,
    onChangeUserName,
    password,
    onChangePassword,
    onSubmit,
    useSecureTextEntry,
    onPressImRight,
  };
};

export default useLogin;
