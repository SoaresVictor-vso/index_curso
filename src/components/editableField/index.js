import { TextInput, View, Image, Text } from 'react-native';
import stylesField from './style.js';
import styles from '../../default/style.js';
import editIcon from '../../img/icons/Editar.png'
import { useState } from "react";


const EditableField = (props) => { 
  const [val, setVal] = useState(props.val);
  return (
    <View>
      <Text style={styles.labelSmall}>{props.name}</Text>
      <View style={stylesField.fieldContainer}>
        <TextInput style={stylesField.input} value={props.val}></TextInput>
        <Image style={stylesField.editIcon} source={editIcon} />
      </View>
    </View>
    
  )
 }




export default EditableField;