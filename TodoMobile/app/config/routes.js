import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/Home/Home'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: () => null },
  }
});

export default createAppContainer(AppNavigator);
