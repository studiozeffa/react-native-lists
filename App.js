import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native'

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

StatusBar.setBarStyle('light-content');

const RootNavigator = createStackNavigator({
  List: ListScreen,
  Detail: DetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#2a3daa'
    },
    headerTintColor: '#FFF'
  }
});

export default createAppContainer(RootNavigator);
