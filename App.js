import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCurrencyFieldText: '',
      sercondCurrencyFieldText: ''
    };
  }

  processInputFromFirstField = (text)=>{
    this.setState({firstCurrencyFieldText: text})
  }

  processInputFromSecondField = (text)=>{
    this.setState({secondCurrencyFieldText: text})
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
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 3
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    height: 30, 
    borderColor: 'gray', 
    borderWidth: 1
  }
});
