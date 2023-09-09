import { StyleSheet, Dimensions } from "react-native";

const screenDimensions = Dimensions.get('screen');
const h = screenDimensions.height;
const w = screenDimensions.width;

const styles = StyleSheet.create({
  fieldContainer:{
    alignItems: 'center',
    flexDirection:'row',
    alignSelf: 'center'
  },
  inputSearch:{
    width: 0.8 * w,
    height: 40,
    backgroundColor: '#fff',
    marginTop: 0.03 * screenDimensions.height,
    marginBottom: 0.02  * screenDimensions.height,
    padding: 10,
    paddingStart: 20,
    borderRadius: 15,
  },
  searchIcon:{
    marginStart: 10,
    width: 0.075 * w,
    height: 0.075 * w
  }

})

export default styles;