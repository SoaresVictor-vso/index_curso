import { Image, View, TextInput, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import styles from '../../default/style';
import seachStyles from './style.js';
import Footer from '../../components/footer';
import Carousel from '../../components/carousel';
import search from '../../img/icons/Search.png';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor='#FC5C65'/>

      <View style={styles.defaultBody}>
        <View style={seachStyles.fieldContainer}>
          <TextInput style={seachStyles.inputSearch}></TextInput>
          <Image style={seachStyles.searchIcon} source={search} />
        </View>
        <ScrollView>

          <Carousel name="Física básica" uriImage="https://i.ytimg.com/vi/3VLPyOLC1nc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCdblpk1U7-WR5yt2gMjewX9RmPGg" uriPlaylist="https://www.youtube.com/playlist?list=PLPz6TqSYQzDYuQ3WqF5plmN0rycwcYULm"/>
          <Carousel name="Matemática básica" uriImage="https://i.ytimg.com/vi/kT9ctBK0gy4/maxresdefault.jpg" uriPlaylist="https://www.youtube.com/playlist?list=PLPz6TqSYQzDYuQ3WqF5plmN0rycwcYULm" />
          <Carousel name="Redação para ENEM" uriImage="https://i.ytimg.com/vi/o_NcGqBPgPg/maxresdefault.jpg" uriPlaylist="https://www.youtube.com/playlist?list=PLPz6TqSYQzDYuQ3WqF5plmN0rycwcYULm"/>
        </ScrollView>
        
      </View>
      
      <Footer/>
    </SafeAreaView>
    
  );
}


export default Home;