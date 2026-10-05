
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow</Text>

      <Text style={styles.subtitle}>
        Checkpoint 1: Estructura Base
      </Text>

      <Text style={styles.status}>
        Estructura base lista
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  subtitle: {
    color: '#D1D5DB',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },

  status: {
    color: '#86EFAC',
    fontSize: 16,
    textAlign: 'center',
  },
});
