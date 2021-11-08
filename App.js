import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useState from 'react';
import { StyleSheet, Button, Text, View, TextInput, Alert } from 'react-native';

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const [text, setText] = React.useState('Guess a number between 1 - 100')
  const randNumber = Math.round(Math.random()*100 + 1);
  const [number, setNumber] =React.useState(randNumber);
  const[guess, setGuess] = React.useState(null);
  const checkGuess = () => {
    setCounter(counter+1);
    if(guess < number){
      setText('Your guess ' + guess + ' is too low' )
    }else if(guess > number){
      setText('Your guess ' + guess + ' is too high')
    }else{
      setText('Your guess ' + guess + ' is correct!')
    }
    if(number == guess){
      Alert.alert('You guessed the number in ' + counter + ' guesses');
    }
    setGuess(null);
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style ={styles.input}
      onChangeText ={setGuess}
      value ={guess}
      placeholder="guess"
      keyboardType="numeric"
      />
      <StatusBar style="auto" />

      <Button title ="MAKE A GUESS" onPress ={checkGuess}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
