import { Text, View, Pressable, SafeAreaView, StatusBar, Image } from 'react-native';
import styles from '../../default/style';
import Footer from '../../components/footer';
import iconExit from '../../img/icons/Sair.png';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor='#FC5C65'/>

      

      <View style={styles.defaultBody}>
        <View style={styles.defaultTitleContainer }>
          <Text style={styles.defaultTitle}>Configurações</Text>
        </View>
        <View style={styles.defaultBody}>
        </View>
        <View style={styles.box}>
            <View style={styles.inlineCenter}>
              <Pressable style={styles.redButton}>
                <View style={styles.inlineCenter}>
                  <Text style={styles.whiteText}>Sair</Text>
                  <Image source={iconExit} />
                </View>
              </Pressable>
            </View>
          </View>
        
      </View>
      
      <Footer/>
    </SafeAreaView>
    
  );
}


export default Home;