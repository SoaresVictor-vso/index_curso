import { Dimensions, Text, View, Image } from 'react-native';
import styles from '../../default/style';
//import Carousel from 'react-native-reanimated-carousel';


const images = ['../../img/icons/Home.png', '../../img/icons/Search.png'];
    let scrImg = [];

    
    /*images.forEach((path, i) => {
        console.log(path)
        scrImg.push(require(`.${path}`))
    })*/

    

const CourseCarousel = (props) => {
    
    return (
    <View style={styles.containerCarousel}>
        <Text style={styles.titleCarousel}>{props.name}</Text>
        <View style={{ flex: 1 }}>
        <Image style={styles.defaultImage}
         source={{
          uri: 'https://i.ytimg.com/vi/3VLPyOLC1nc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCdblpk1U7-WR5yt2gMjewX9RmPGg',
        }} />    



        </View>
    </View>
    
    )
}

export default CourseCarousel;