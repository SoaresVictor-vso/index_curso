import { Dimensions, Text, View } from 'react-native';
import styles from '../../default/style';
//import Carousel from 'react-native-reanimated-carousel';


const images = ['../../img/icons/Home.png', '../../img/icons/Search.png'];
    let scrImg = [];
    images.forEach((path, i) => {
        console.log(path)
        scrImg.push(require(`.${path}`))
    })
    

const CourseCarousel = (props) => {
    
    return (
    <View>
        <Text style={styles.defaultLabel}>{props.name}</Text>
        <View style={{ flex: 1 }}>
            



        </View>
    </View>
    
    )
}

export default CourseCarousel;