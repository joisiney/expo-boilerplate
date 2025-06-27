import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Página não encontrada' }} />
      <View className="flex-1 items-center justify-center p-5 bg-background-secondary">
        <Text className="text-8xl font-sans-bold text-text-primary mb-4">
          404
        </Text>
        <Text className="text-2xl font-sans-medium text-text-secondary mb-2">
          Página não encontrada
        </Text>
        <Text className="text-base text-text-tertiary text-center leading-6 font-sans">
          A página que você está procurando não existe.
        </Text>
      </View>
    </>
  );
}