import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

export default function Index() {
  return <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Expo Boilerplate</Text>
      <Text style={styles.subtitle}>Um ponto de partida para seus projetos</Text>
    </View>
    
    <View style={styles.iconContainer}>
      <Svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        testID="test-svg"
        style={styles.logo}
      >
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="#007AFF"
          strokeWidth="3"
          fill="#E3F2FD"
        />
        <Path
          d="M30 50 L50 30 L70 50 L50 70 Z"
          fill="#007AFF"
          stroke="#0056CC"
          strokeWidth="2"
        />
      </Svg>
    </View>
    
    <View style={styles.content}>
      <Text style={styles.description}>
        Este é um boilerplate configurado com:
      </Text>
      <Text style={styles.feature}>✨ Expo Router</Text>
      <Text style={styles.feature}>🎨 Fonte Quicksand</Text>
      <Text style={styles.feature}>🧪 Jest + Testing Library</Text>
      <Text style={styles.feature}>📱 TypeScript</Text>
      <Text style={styles.feature}>🎯 ESLint</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    fontFamily: 'Quicksand_700Bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Quicksand_400Regular',
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    fontFamily: 'Quicksand_500Medium',
    textAlign: 'center',
  },
  feature: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    fontFamily: 'Quicksand_400Regular',
  },
});