import {Text, View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

export default function Index() {
    return (
        <View className="flex-1 p-5 bg-background-primary">
            <View className="items-center mt-15 mb-10">
                <Text className="text-4xl font-sans-bold text-text-primary mb-2 text-center">
                    Expo Boilerplate
                </Text>
                <Text className="text-base text-text-secondary font-sans text-center">
                    Um ponto de partida para seus projetos
                </Text>
            </View>

            <View className="items-center mb-10">
                <Svg
                    width="120"
                    height="120"
                    viewBox="0 0 100 100"
                    testID="test-svg"
                    className="shadow-lg"
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

            <View className="items-center">
                <Text className="text-lg text-text-primary mb-5 font-sans-medium text-center">
                    Este é um boilerplate configurado com:
                </Text>
                <Text className="text-base text-text-secondary mb-2 font-sans">
                    ✨ Expo Router
                </Text>
                <Text className="text-base text-text-secondary mb-2 font-sans">
                    🎨 Fonte Quicksand
                </Text>
                <Text className="text-base text-text-secondary mb-2 font-sans">
                    🧪 Jest + Testing Library
                </Text>
                <Text className="text-base text-text-secondary mb-2 font-sans">
                    📱 TypeScript
                </Text>
                <Text className="text-base text-text-secondary mb-2 font-sans">
                    🎯 ESLint
                </Text>
                <Text className="text-base text-text-secondary mb-2 font-sans">
                    🎨 NativeWind
                </Text>
            </View>
        </View>
    );
}
