//* RN IMPORTS //
import { View } from 'react-native';

//* IMG SLIDER BOX IMPORT //
import { SliderBox } from 'react-native-image-slider-box';

//* STYLES IMPORT //
import { styles } from '../styles/Carousel';
import { COLORS } from '../../../theme';

//* CAROUSEL COMPONENT CODE //
const Carousel = () => {
  const slides = [
    "https://res.cloudinary.com/lmr-media/image/upload/v1690999177/Ave%20Coffee%20Co/pexels-afta-putta-gunawan-683039_m25dn2.jpg",
    "https://res.cloudinary.com/lmr-media/image/upload/v1689561798/Ave%20Coffee%20Co/pexels-jason-villanueva-851555_opgdjh.jpg",
    "https://res.cloudinary.com/lmr-media/image/upload/v1689561806/Ave%20Coffee%20Co/pexels-chevanon-photography-302901_bmrzan.jpg"
  ]

  return (
    <View style={styles.container}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        ImageComponentStyle={styles.imgComponent}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;
