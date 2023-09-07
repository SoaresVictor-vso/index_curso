import { Text, View, Button } from 'react-native';
import styles from '../../default/style';
import Footer from '../../components/footer';


const Search = ({navigation}) => {
  return (
    <View style={styles.page} >
      <View style={styles.defaultBody}>
        <Text style={styles.defaultLabel}>TELA DE BUSCAAAA</Text>
        
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />


      </View>
      
      <Footer/>
    </View>
    
  );
}

export default Search;