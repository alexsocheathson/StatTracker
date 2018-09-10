import { createStackNavigator } from 'react-navigation';

import HomeScreen from './Views/HomeScreen'
import Detail from './Views/Detail'

const RootStack = createStackNavigator(
    {
      Start: HomeScreen,
      Details: Detail,
    },
    {
      initialRouteName: 'Start',
    }
  );

  export default RootStack