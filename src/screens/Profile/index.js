import { Image, View, Pressable, SafeAreaView, StatusBar, ScrollView, Text, Button } from 'react-native';
import styles from '../../default/style';
import profileStyles from './style.js';
import Footer from '../../components/footer';
import Carousel from '../../components/carousel';
import profile from '../../img/icons/Person.png';
import EditableField from '../../components/editableField';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor='#FC5C65'/>

      <View style={styles.defaultBody}>
        <ScrollView>
          <Image style={profileStyles.profileImage} source={profile} />
          <View style={styles.inlineCenter}>
            <Pressable style={styles.redOutlineButton}>
              <Text style={styles.whiteText}>Tirar foto</Text>
            </Pressable>
            <Pressable style={styles.redOutlineButton}>
              <Text style={styles.whiteText}>Adicionar foto</Text>
            </Pressable>
          </View>
        
          <EditableField id='publicName' name='Nome exibido'></EditableField>
          <EditableField id='userName' name='Nome de usuário'></EditableField>
          <EditableField id='email' name='Email de recuperação'></EditableField>
          <EditableField id='phone' name='Telefone (opcional)'></EditableField>

          <View style={profileStyles.box}>
            <Text style={styles.labelSmall}>Senha</Text>
            <View style={styles.inlineCenter}>
              <Pressable style={styles.blueButton}>
                <Text style={styles.whiteText}>Alterar Senha</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.box}>
            <Text style={styles.labelSmall}>Remoção de conta</Text>
            <View style={styles.inlineCenter}>
              <Pressable style={styles.redButton}>
                <Text style={styles.whiteText}>Desativar conta</Text>
              </Pressable>
              <Pressable style={styles.redOutlineButton}>
                <Text style={styles.whiteText}>Excluir conta</Text>
              </Pressable>
            </View>
            
          </View>
        </ScrollView>
        
      </View>
      
      <Footer/>
    </SafeAreaView>
    
  );
}


export default Home;