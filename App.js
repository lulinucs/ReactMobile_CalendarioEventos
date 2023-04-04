import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './Home';
import EventsDetails from './EventsDetails.js';
import FavsPage from './favsPage'
import Splash from './components/Splash';

const MainNavigator = createStackNavigator({
  Carregando: { screen: Splash },
  Home: { screen: HomeScreen },  
  EventsDetails: { screen: EventsDetails },
  FavsPage: { screen: FavsPage },
});

const App = createAppContainer(MainNavigator);
export default App;
