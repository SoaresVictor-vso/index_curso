import { Text, View, Button, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import styles from '../../default/style';
import Footer from '../../components/footer';
import Carousel from '../../components/carousel';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor='#FC5C65'/>

      <View style={styles.defaultBody}>
        <View style={styles.defaultTitleContainer }>
          <Text style={styles.defaultTitle}>Index Cursos</Text>
        </View>
        <ScrollView>

          <Carousel name="Curso em Destaque" uriImage="https://i.ytimg.com/vi/3VLPyOLC1nc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCdblpk1U7-WR5yt2gMjewX9RmPGg" uriPlaylist="https://www.youtube.com/playlist?list=PLPz6TqSYQzDYuQ3WqF5plmN0rycwcYULm"/>
          <Carousel name="Recomendação" uriImage="https://i.ytimg.com/vi/kT9ctBK0gy4/maxresdefault.jpg" uriPlaylist="https://www.youtube.com/playlist?list=PLPz6TqSYQzDYuQ3WqF5plmN0rycwcYULm" />
          <Carousel name="Favorito" uriImage="https://i.ytimg.com/vi/o_NcGqBPgPg/maxresdefault.jpg" uriPlaylist="https://www.youtube.com/playlist?list=PLPz6TqSYQzDYuQ3WqF5plmN0rycwcYULm"/>
        </ScrollView>
        
      </View>
      
      <Footer/>
    </SafeAreaView>
    
  );
}


export default Home;