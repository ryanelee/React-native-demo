import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class Timer extends Component {
    constructor(props){
        super(props);
console.log(props);

        this.state = {
            unit:this.props.unit,
            date: new Date(0,0,0,this.props.hour, this.props.minute, this.props.second),
            hour: this.props.hour,
            minute: this.props.minute,
            second:this.props.second,
            isStopped: this.props.isStopped,
            intervalRef: null
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resumeTimer = this.resumeTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer(unit='SEC', hour, min, sec){
        let interval = 1000;
        if(unit === 'MIN')
            interval = 1000 * 60;

        if(this.state.intervalRef != null) clearInterval(this.state.intervalRef);

        this.setState({ 
            hour: hour,
            minute: min,
            second: sec
         }, () => {
            let intervalRef = setInterval( () => {
                if(this.state.second === 0){
                    this.setState({
                        second: 59,
                        minute: this.state.minute === 0 ? 0 : --this.state.minute
                    });
                }       

                if(unit === 'MIN') {
                    this.setState({
                        minute: this.state.minute === 0 ? 0 : --this.state.minute
                    });
                }

                if(unit === 'SEC'){                                 
                    this.setState({
                        second: this.state.second === 0 ? 0 : --this.state.second
                    });
                }

            }, interval);

            this.setState({
                intervalRef: intervalRef
            });
        });
    }

    resetTimer(){
        if(this.state.intervalRef) clearInterval(this.state.intervalRef);

        this.setState({
            unit: 'SEC',
            hour: 0,
            minute: 0,
            second: 0,
            isStopped: false,
            intervalRef: null
        });
    }

    stopTimer(){
        if(this.state.countDown === 0) return;

        if(this.state.intervalRef) clearInterval(this.state.intervalRef);

        this.setState({
            isStopped: true
        });
    }

    resumeTimer(){
        if(!this.state.isStopped) return;

        this.startTimer(this.state.unit, this.state.hour,this.state.minute, this.state.second);
        this.setState({
            isStopped: false
        });
    }

    render(){
        return(
            <View>
                <Text style={{fontWeight:'bold', fontSize: 100}}>
                    {/* { () => {
                        // if(this.state.hour === 0 && this.state.minute === 0 && this.state.second === 0){
                        //     return "Times up!";
                        // }

                        
                    }
                                                    
                    } */
                    this.state.hour.toString() + ':' + this.state.minute.toString() + ':' + this.state.second.toString()}
                </Text>
                <Button 
                    title="Start"
                    onPress={() => this.startTimer('SEC',this.state.hour,this.state.minute,this.state.second)}>
                </Button>
                <Button 
                    title="Reset"
                    onPress={() => this.resetTimer()}>
                </Button>
                <Button 
                    title="Stop/Resume"
                    onPress={() => {
                        if(this.state.isStopped){
                            this.resumeTimer();
                        }
                        else{
                            this.stopTimer();
                        }
                    }}>
                </Button>
            </View>
        );
    }
}