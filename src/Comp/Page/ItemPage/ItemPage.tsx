import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function ItemPage() {
  const [item, setItem] = useState('');

  return (
    <View>
      <Text>ItemPage</Text>
      <View style={styles.container}>
        <Text>temPage</Text>
        <Text>{item}</Text>
        <TextInput
          style={styles.input}
          value={item}
          onChangeText={text => {
            setItem(text);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ItemPage;
