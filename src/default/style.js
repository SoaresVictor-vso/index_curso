import { StyleSheet, Dimensions } from "react-native";

const screenDimensions = Dimensions.get('screen');

const h = screenDimensions.height;
const w = screenDimensions.width;

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1,
    backgroundColor: '#FC5C65',
    marginTop: '8%',
  },
  defaultBody:{
    backgroundColor: '#FC5C65',
    flex: 1,
  },
  defaultFooter:{
    backgroundColor: '#000',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    
  },
  defaultLabel:{
    paddingHorizontal: 10,
    fontSize: 20,
    color: '#FFF',
  },
  defaultTitle:{
    paddingHorizontal: 10,
    paddingBottom: 20,
    fontSize: 30,
    color: '#FFF',
    alignSelf: 'center',
  },
  defaultTitleContainer:{
    borderBottomColor: '#B34246',
    borderBottomWidth: 2,
  },
  page:{
    flex: 1,
  },
  red:{
    backgroundColor: '#FC5C65'
  },
  defaultInput:{
    marginHorizontal: 0.05*screenDimensions.width,
    marginTop: 0.03 * screenDimensions.height,
    marginBottom: 0.02  * screenDimensions.height,
    backgroundColor: '#FFF',
    height: 40,
    padding: 10,
    paddingStart: 20,
    borderRadius: 15,
  },
  defaultImage:{
   
    marginHorizontal: 0.1*screenDimensions.width,
    width: 0.8*screenDimensions.width,
    height: 0.45*screenDimensions.width,
    resizeMode: 'stretch',
    position: "absolute", 
    flexDirection:"column",
    borderWidth: 5,
    borderColor: '#000',
  },
  containerCarousel:{
    height: 0.60 * screenDimensions.width
  },
  titleCarousel:{
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 0.1*screenDimensions.width,
    fontSize: 20,
    color: '#fff',
    fontWeight: "bold",
  },
  inlineCenter:{
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection:'row',
  },
  redOutlineButton:{
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 3,
    borderColor: '#c00',
    height: 0.05 * h,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  redText:{
    color: '#c00',
    paddingHorizontal: 5
  },
  whiteText:{
    color: '#fff',
    paddingHorizontal: 5,
    alignSelf:  'center'
  },
  labelSmall:{
    marginStart: 0.05 * w,
    paddingHorizontal: 1,
    fontSize: 15,
    color: '#FFF',
    paddingBottom: 5
  },
  redButton:{
    margin: 10,
    backgroundColor: '#c00',
    height: 0.05 * h,
    width: 0.4 * w,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 3
  },
  blueButton:{
    margin: 10,
    backgroundColor: '#2d98da',
    height: 0.05 * h,
    width: 0.4 * w,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 3
  },
  box:{
    borderTopWidth: 2,
    borderTopColor: '#fff',
    paddingTop: 10
  }
});


export default styles;