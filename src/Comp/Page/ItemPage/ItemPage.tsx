import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

function ItemPage() {
  const [item, setItem] = useState('');

  return (
    <View>
      <Text>ItemPage</Text>
      <View>
        <Text>temPage</Text>
        <Text>{item}</Text>
        <TextInput
          style={{borderWidth: 1, borderColor: 'black'}}
          value={item}
          onChangeText={text => {
            setItem(text);
          }}
        />
      </View>
    </View>
  );
}

export default ItemPage;
