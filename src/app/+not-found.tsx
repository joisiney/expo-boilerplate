import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Página não encontrada' }} />
      <View style={styles.container}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>Página não encontrada</Text>
        <Text style={styles.description}>
          A página que você está procurando não existe.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    fontFamily: 'Quicksand-Bold',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    fontFamily: 'Quicksand-Medium',
  },
  description: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'Quicksand-Regular',
  },
});