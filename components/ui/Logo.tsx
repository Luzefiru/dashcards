import { Image, StyleSheet } from 'react-native';

export function Logo() {
  return (
    <Image style={styles.image} source={require('@/assets/images/icon.png')} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 30.16,
    marginRight: 12
  }
});
