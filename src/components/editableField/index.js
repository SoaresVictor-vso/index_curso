import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, View, Image, Text } from 'react-native';
import stylesField from './style.js';
import styles from '../../default/style.js';
import editIcon from '../../img/icons/Editar.png'
import { useState, Component } from "react";


const storeData = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value ? value : '');
  } catch (e) {
    // saving error
    console.error(e)
  }
};

const getData = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
    console.error(e)
    return '+=+';
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data:', error);
  }
};
async function loadField(id, setState, loaded, setLoeaded) {
  if(loaded) return
  setLoeaded(true)
  //console.log('[0]')
  setState(await getData(id))
}


let i = 0;
const EditableField = (props) => { 
  const id = props.id;
  //console.log(id)
  
  const [loaded, setLoeaded] = useState(false)
  const [state, setState] = useState('');
  loadField(id, setState, loaded, setLoeaded)

  const handleTextChange = async (text) => {
    setState(text)
  }

  const handleTextBlur = async () => {
    const data = await getData(id)
    //console.log('Text old:', data);
    //console.log('Text changed:', state);
    try {
    await storeData(id, state)
    } catch (e) {
      console.error(e)
}
  }
  return (
    <View>
      <Text style={styles.labelSmall}>{props.name}</Text>
      <View style={stylesField.fieldContainer}>
        <TextInput onBlur={handleTextBlur} onChangeText={handleTextChange} style={stylesField.input} value={state}></TextInput>
        <Image style={stylesField.editIcon} source={editIcon} />
      </View>
    </View>
    
  )
 }




export default EditableField;