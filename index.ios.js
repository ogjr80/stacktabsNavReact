/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet,
} from 'react-native';

import  TabsMenu  from './config/router'; 




export default class gitHubnotesTaker extends Component {
  render() {
    return (
        <TabsMenu />         
    );
  }
}


// class SomeComponent extends Component{
//   render(){
//     return (
//         <Text>Hello {this.props.name} </Text> 
//       )
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('gitHubnotesTaker', () => gitHubnotesTaker);
