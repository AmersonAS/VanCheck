import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Notifications = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      onPress={() => console.log('Button Pressed')}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.button, isPressed && styles.highlightedButton]}
    >
      <Text style={styles.buttonText}>Press me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    margin: 10,
  },
  highlightedButton: {
    borderColor: 'orange', // Cor da borda quando pressionado
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Notifications;
