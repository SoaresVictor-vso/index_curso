import { Text, View, Button, SafeAreaView, StatusBar } from 'react-native';
import styles from '../../default/style';
import Footer from '../../components/footer';
import Carousel from '../../components/carousel';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor='#FC5C65'/>

      <View style={styles.defaultBody}>
        
        <Text style={styles.defaultTitle}>Index Cursos</Text>
        
        <Carousel name="Cursos em Destaque" />
        <Carousel name="Recomendações" />
        <Carousel name="Favoritos" />
        
      </View>
      
      <Footer/>
    </SafeAreaView>
    
  );
}


export default Home;