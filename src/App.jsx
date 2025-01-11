import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
        placeholder="Enter text to hash"
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleEncrypt(inputText)}>
        <Text style={styles.buttonText}>Hash!</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#eebb55',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  result: {
    marginTop: 12,
    fontSize: 16,
  },
});

export default App;
