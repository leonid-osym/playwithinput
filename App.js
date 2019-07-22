import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    const rate = 2.5;
    this.state = {
      firstCurrencyFieldText: '',
      sercondCurrencyFieldText: ''
    };
  }

  processInputFromFirstField = (text)=>{
    this.setState({firstCurrencyFieldText: text})
    this.setState({secondCurrencyFieldText: text})
  }

  processInputFromSecondField = (text)=>{
    this.setState({secondCurrencyFieldText: text})
    this.setState({firstCurrencyFieldText: text})
  }

  getNumberFromString = (string, lang)=>{
    return 0;
  }

  getStringFromNumber = (number, lang)=>{
    return '0';
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={styles.currencyView}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.processInputFromFirstField}
            value={this.state.firstCurrencyFieldText}
          />
          <Text style={styles.welcome}>{'<--->'}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={this.processInputFromSecondField}
            value={this.state.secondCurrencyFieldText}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  currencyView: {
    //flex: 1,
    width: '95%',
    height: '10%',
    flexDirection:'row',
    justifyContent: 'space-between',
    borderColor: '#000',
    borderWidth: 3
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
    margin: 10,
  },
  textInput: {
    margin: 15,
    height: 40, 
    width: 100,
    borderBottomWidth: 2,
    borderBottomColor: 'gray'
  }
});
