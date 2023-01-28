import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from './types';

type MainStack = NativeStackNavigationProp<MainStackParamList>;

export const useMainNavigation = () => useNavigation<MainStack>();

export const useMainRoute = <Screen extends keyof MainStackParamList>() =>
  useRoute<RouteProp<MainStackParamList, Screen>>();
