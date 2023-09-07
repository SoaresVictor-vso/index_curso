import { StyleSheet } from "react-native";

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
    alignSelf: 'center'
  },
  page:{
    flex: 1,
  },
  red:{
    backgroundColor: '#FC5C65'
  }
});


export default styles;