import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  {Router,Scene} from 'react-native-router-flux'
import  {Platform} from 'react-native'

import Home from './src/components/Home'
import Chat from './src/components/Chat'
export default class App extends React.Component {
  render() {
    return (
     <Router>
       <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64: 54}}>
        <Scene key='home' component={Home}  title='Home'></Scene>
        <Scene key='chat' component={Chat}  title='Chat'></Scene>
       </Scene>
     </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
