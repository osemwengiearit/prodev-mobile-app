// app/index.tsx
import { useRouter } from 'expo-router';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants';
import { styles } from '../styles/_mainstyle';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to Our App</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>Your trusted companion in success</Text>
        </View>

        <View style={{ marginTop: 100 }}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={() => router.push('/join')} style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Join Now</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/signin')} style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
