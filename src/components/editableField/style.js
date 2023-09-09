import { StyleSheet, Dimensions } from "react-native";

const screenDimensions = Dimensions.get('screen');
const h = screenDimensions.height;
const w = screenDimensions.width;

const styles = StyleSheet.create({
  fieldContainer:{
    alignItems: 'center',
    flexDirection:'row',
    alignSelf: 'center',
  },
  input:{
    width: 0.8 * w,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 0.02  * screenDimensions.height,
    padding: 10,
    paddingStart: 20,
    borderRadius: 5,
  },
  editIcon:{
    marginStart: 10,
    width: 0.075 * w,
    height: 0.075 * w,
    tintColor: '#c00'
  }

})

export default styles;