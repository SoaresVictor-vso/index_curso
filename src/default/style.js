import { StyleSheet, Dimensions } from "react-native";

const screenDimensions = Dimensions.get('screen');

console.log(screenDimensions)

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
    marginBottom: 50
  },
  page:{
    flex: 1,
  },
  red:{
    backgroundColor: '#FC5C65'
  },
  defaultImage:{
   
    marginHorizontal: 0.1*screenDimensions.width,
    width: 0.8*screenDimensions.width,
    height: 0.45*screenDimensions.width,
    resizeMode: 'stretch',
    position: "absolute", 
    flexDirection:"column"
  },
  containerCarousel:{
    height: 0.65 * screenDimensions.width
  },
  titleCarousel:{
    //marginHorizontal: 0.1*screenDimensions.width,
    fontSize: 20,
    color: '#FFF',
  }
});


export default styles;