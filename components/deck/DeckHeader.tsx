import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface Props {
  title: string;
  subtitle: string;
}

export function DeckHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingBottom: 48,
    paddingTop: 16
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.textPrimary
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.textPrimary
  }
});
