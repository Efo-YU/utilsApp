import React, {useState} from 'react';
import {SafeAreaView, TextInput, Button, Text, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import encryptText from './components/Encryptor';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [hashedText, setHashedText] = useState('');

  const handleEncrypt = text => {
    const hashed = encryptText(text);
    setHashedText(hashed);
    Clipboard.setString(hashed);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text to encrypt"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Encrypt" onPress={() => handleEncrypt(inputText)} />
      {hashedText ? (
        <Text style={styles.result}>
          Hashed Output: {hashedText} (Copied to clipboard)
        </Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 12,
    fontSize: 16,
  },
});

export default App;
