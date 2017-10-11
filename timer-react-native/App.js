import React from 'react';
import { Button, Switch, StyleSheet, Text, View, TextInput } from 'react-native';

import Timer from './src/Timer';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false,
      unit: 'MIN'
    };
    // this.state = { 
    //   time: (new Date()).toLocaleString(), 
    //   countDown: 10,
    //   intervalRef: null
    // };

    // setInterval( () => {
    //   this.setState({ time: (new Date()).toLocaleString()})
    // },1000);

    // this.startCountDown = this.startCountDown.bind(this);
  }

  // startCountDown(interval) {
  //   // if(this.state.countDown <= 0) return;
  //   // if(this.interval <= 0) interval = 1;

  //   clearInterval(this.state.intervalRef);
  //   console.log(interval);
  //   console.log(this.state.countDown);
  //   this.setState({ countDown: interval }, () => {
  //     let intervalRef = setInterval(() => {
  //       this.setState({ countDown: this.state.countDown === 0 ? 0 : --this.state.countDown})
  //     },1000);
  //     this.setState({intervalRef: intervalRef});
  //   })
  // }

  render() {

    return (
      // <View style={styles.container}>
      //   <Text>Hello newegg!</Text>
      //   <Text>Now is {this.state.time}</Text>
      //   <Button title={'Start Countdown('+this.state.countDown.toString()+')'}
      //     onPress={()=>this.startCountDown(10)}
      //     color="#841584"
      //     accessibilityLabel="Learn more about this purple button">
      //   </Button>
      //   <Button title={'Start Countdown('+this.state.countDown.toString()+')'}
      //     onPress={()=>this.startCountDown(15)}
      //     color="#841584"
      //     accessibilityLabel="Learn more about this purple button">
      //   </Button>
      //   <Button title={'Start Countdown('+this.state.countDown.toString()+')'}
      //     onPress={()=>this.startCountDown(20)}
      //     color="#841584"
      //     accessibilityLabel="Learn more about this purple button">
      //   </Button>
      //   <TextInput
      //     style={{height:40, borderColor:'gray', borderWidth: 1, width:50}}
      //     onChangeText={()=>{this.setState({countDown:20})}}
      //     value={this.state.countDown.toString()}>
      //   </TextInput>

      //   <Text>Start Countdown: {this.state.countDown}</Text>
      // </View>
      <View style={styles.container}>
        <Timer unit={this.state.unit} hour="0" minute="10" second="10"/>        
        <Switch
          value={ this.state.toggle }
          onValueChange={(val) => this.setState({ toggle: val, unit: val===true?'MIN':'SEC'})} >
        </Switch>
        <Text>{this.state.unit === null ? 'MIN' : this.state.unit}</Text>
      </View>
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
