import { TouchableHighlight, Text, View, Image, Linking  } from 'react-native';
import styles from '../../default/style';
import { useCallback } from 'react';
//import Carousel from 'react-native-reanimated-carousel';


const images = ['../../img/icons/Home.png', '../../img/icons/Search.png'];
    let scrImg = [];

    
    /*images.forEach((path, i) => {
        console.log(path)
        scrImg.push(require(`.${path}`))
    })*/

    

const CourseCarousel = (props) => {
  console.log(props)
    const OpenURLButton = ({url, content}) => {
      const handlePress = useCallback(async () => {

        console.log(url)
        // Checking if the link is supported for links with custom URL scheme.
        //const supported = await Linking.canOpenURL(url);
    
        //if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile

          await Linking.openURL(url);
        //} else {
        //  Alert.alert(`Don't know how to open this URL: ${url}`);
        //}
      });
    
      return <TouchableHighlight activeOpacity={0.6} onPress={handlePress} >{content}</TouchableHighlight>;
    }

    const ContentImage = (props) => {
      return (<Image style={styles.defaultImage} source={{uri:props.uri}} />)
    }


    return (
    <View style={styles.containerCarousel}>
        <Text style={styles.titleCarousel}>{props.name}</Text>

        <View style={{ flex: 1 }}>
          
          <OpenURLButton url={props.uriPlaylist} content={ <ContentImage uri={props.uriImage} /> }/>
                
            
        </View>
    </View>
    
    )
}

export default CourseCarousel;