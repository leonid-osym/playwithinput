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

  processInputFromFirstField = (text) => {
    this.setState({ firstCurrencyFieldText: text })
    let lang = 'en';
    let rrr = this.formatInput(text, lang);
    let s1 = this.getNumberFromString(text, lang);
    let s2 = this.getStringFromNumber(s1, lang);

    this.setState({ firstCurrencyFieldText: rrr });
    this.setState({ secondCurrencyFieldText: s2 });
  }

  processInputFromSecondField = (text) => {
    let lang = 'en';
    let rrr = this.formatInput(text, lang);
    let s1 = this.getNumberFromString(text, lang);
    let s2 = this.getStringFromNumber(s1, lang);

    this.setState({ secondCurrencyFieldText: rrr });
    this.setState({ firstCurrencyFieldText: s2 });
  }

  formatInput = (str, lang) => {
    let intPart = '';
    let fractPart = '';
    if (str.includes('.') && str.indexOf('.')) {
      var pos = str.indexOf('.');
      intPart = str.slice(0, pos).replace(/[,.' ']/g, '') + '.';
      fractPart = str.slice(pos).replace(/[,.' ']/g, '').slice(0, 2);
    } else {
      intPart = str.replace(/[,.' ']/g, '');
    }
    let pattern = this.getRegexPattern(intPart.length - 1, lang);
    intPart = intPart.replace(new RegExp(pattern[0]), pattern[1]);
    intPart = intPart[0] === (',' || ' ') ? intPart.slice(1) : intPart;
    str = intPart + fractPart;
    return str;
  }

  getNumberFromString = (str, lang) => {
    str = this.formatInput(str, lang);
    if (str && typeof str === 'string') {
      let res = str.replace(/[,' ']/g, '');
      return res ? res : 0;
    }
    return 0;
  }

  getStringFromNumber = (num, lang)=>{
    let str = num.toString();
    return this.formatInput(str, lang);
  }

  // getStringFromNumber = (num, lang) => {
  //   let str = num.toString();
  //   let intPart = '';
  //   let fractPart = '';
  //   if (str.includes('.')) {
  //     var pos = str.indexOf('.');
  //     intPart = str.slice(0, pos);
  //     fractPart = str.slice(pos, pos + 3);
  //     let pattern = this.getRegexPattern(intPart.length, lang);

  //     intPart = intPart.replace(new RegExp(pattern[0]), pattern[1]);
  //     intPart = intPart[0] === (',' || ' ') ? intPart.slice(1) : intPart;
  //     str = intPart + fractPart;
  //   } else {
  //     let pattern = this.getRegexPattern(str.length, lang);

  //     intPart = str.replace(new RegExp(pattern[0]), pattern[1]);
  //     intPart = intPart[0] === (',' || ' ') ? intPart.slice(1) : intPart;
  //     str = intPart + fractPart;
  //   }
  //   return str;
  //   //var str = str.replace(/[,' ']/g,'');
  //   //var newstr = str.replace('/([0-9]{1,3})([0-9]{3})([0-9]{1,2})/', "$1 $2 555555$3");
  //   // var newstr = str.replace(/([0-9]{1,3})([0-9]{3})/, "$1 $2");
  //   // this.setState({secondCurrencyFieldText: newstr})
  //   //return 0;
  // }

  getRegexPattern = (number, lang) => {
    let pat1 = ['([0-9]{0,3})'];
    let pat2 = ['$1', '$2'];
    for (let i = 1; i < Math.floor(number / 3); i++) {
      pat1.push('([0-9]{3})');
      pat2.push(`$${i + 2}`);
    };
    pat1.push('([0-9]{3})');
    return [pat1.join(''), pat2.join(lang === 'en' ? ',' : ' ')];
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
    width: '95%',
    height: '10%',
    flexDirection: 'row',
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
