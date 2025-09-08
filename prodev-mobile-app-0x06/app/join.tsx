// app/join.tsx
import { useRouter } from 'expo-router';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FACEBOOKLOGO, GOOGLELOGO } from '../constants';
import { styles } from '../styles/_joinstyle';

export default function JoinScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Text></Text>
        <Text style={{ fontSize: 16 }} onPress={() => router.push('/')}>Close</Text>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create your account to get started</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.formControl} />
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text style={styles.signupSubTitleText} onPress={() => router.push('/signin')}>Sign In</Text>
      </View>
    </View>
  );
}
