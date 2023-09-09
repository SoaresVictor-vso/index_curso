import { StyleSheet, Dimensions } from "react-native";

const screenDimensions = Dimensions.get('screen');
const h = screenDimensions.height;
const w = screenDimensions.width;

const styles = StyleSheet.create({
  profileImage:{
    width: 0.6 * w,
    height: 0.6 * w,
    borderRadius: 0.3 * w,
    backgroundColor: '#c0c0c0',
    alignSelf: 'center',
    marginTop: 0.05 * h,
    marginBottom: 0.02 * h,
    borderColor: '#c00',
    borderWidth: 3
  },
  box:{
    borderTopWidth: 2,
    borderTopColor: '#fff',
    paddingTop: 10
  }


})

export default styles;