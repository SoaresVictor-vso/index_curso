import { View, TouchableHighlight, Image } from 'react-native';
import styles from '../../default/style';
import footerStyles from './style.js'

import { useRoute } from '@react-navigation/native';

import home from '../../img/icons/Home.png';
import person from '../../img/icons/Person.png';
import gear from '../../img/icons/Gear.png';
import search from '../../img/icons/Search.png';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';




const Footer = () => {  
  const route = useRoute()
  
  const [homeStyle, setHomeStyle] = useState(footerStyles.selectedIcon)
  
  console.log(route.name)
  const navigation = useNavigation();
    return (
      <View style={styles.defaultFooter}>
        <TouchableHighlight style={route.name == 'Home' ? footerStyles.selectedIcon : footerStyles.defaultIcon} onPress={() => navigation.navigate('Home')}>
          <View>
            <Image source={home} alt="Início"/>
            
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={route.name == 'Search' ? footerStyles.selectedIcon : footerStyles.defaultIcon} onPress={() => navigation.navigate('Search')}>
          <View>
            <Image source={search} alt="Buscar"/>
            
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={route.name == 'Profile' ? footerStyles.selectedIcon : footerStyles.defaultIcon} onPress={() => navigation.navigate('Profile')}>
          <View>
            <Image source={person} alt="Perfil"/>
            
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={route.name == 'Settings' ? footerStyles.selectedIcon : footerStyles.defaultIcon} onPress={() => navigation.navigate('Search')}>
          <View>
            <Image source={gear} alt="Configurações"/>
            
          </View>
        </TouchableHighlight>

      </View>
    );
  }
  
  /** */
  
  export default Footer;