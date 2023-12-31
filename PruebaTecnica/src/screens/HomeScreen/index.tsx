import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import image from '../../../assets/PaqueteAtomic/MaskGroup1.png';
import astronaut from '../../../assets/PaqueteAtomic/Group4032.png';
import arrow from '../../../assets/PaqueteAtomic/Group40132x.png';
import peopleImg from '../../../assets/PaqueteAtomic/Group4040.png';
import WokersCard from '../../components/WorkersCard';
import CardsCarousel from '../../components/PhraseCards';
import styles from './styles';
import Footer from '../../components/Footer';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const scrollToPosition = () => {
    const positionY = 1100;
    scrollViewRef.current.scrollTo({y: positionY, animated: true});
  };
  const scrollViewRef = React.createRef();
  const navigation = useNavigation();
  const onRegister = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView style={styles.body} ref={scrollViewRef}>
      <ImageBackground source={image} style={styles.imageBg}>
        <Text style={styles.title}>
          Desarrolla todo <Text style={styles.highLighted}>tu POTENCIAL</Text>{' '}
          dentro del equipo <Text style={styles.highLighted}>ATOMICLABS</Text>
        </Text>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={scrollToPosition}>
            <Image source={arrow} style={styles.arrow} />

            <Text style={styles.arrowText}> Quiero saber más </Text>
          </TouchableOpacity>
        </View>
        <Image source={astronaut} style={styles.astronautImg} />
        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>¡Quiero ser parte!</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          SOMOS EL BRAZO DERECHO{' '}
          <Text style={styles.highLighted}>DE LA TECNOLOGÍA</Text>
        </Text>
        <View>
          <View style={styles.carouselContainer}>
            <CardsCarousel />
          </View>
        </View>

        <Text style={styles.subtitle}>
          ¡TE ENCANTARÁ{' '}
          <Text style={styles.highLighted}>TRABAJAR CON NOSOTROS!</Text>
        </Text>
        <Image source={peopleImg} style={styles.peopleImg} />
        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>¡Quiero ser parte!</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          NUESTRO <Text style={styles.highLighted}>EQUIPO</Text>
        </Text>
        <View style={styles.workers}>
          <WokersCard />
        </View>
      </ImageBackground>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
