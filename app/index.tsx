import {Text, View, TouchableOpacity} from 'react-native';
import {t} from '@lingui/core/macro';
import {useLocale} from '@/core/config/lingui/hooks';

export default function Index() {
    const {changeLocale, availableLocales, currentLocale} = useLocale();

    return (
        <View className="flex-1 p-5 bg-background-primary">
            {/* Demonstração básica de tradução */}
            <View className="items-center mt-10 mb-10 bg-blue-500 p-4">
                <Text className="text-white text-2xl font-bold text-center">
                    {t`Expo Boilerplate`}
                </Text>
                <Text className="text-white text-base text-center mt-2">
                    {t`Um ponto de partida para seus projetos`}
                </Text>
            </View>

            {/* Botões para trocar idioma */}
            <View className="bg-green-500 p-4 mb-4">
                <Text className="text-white font-bold mb-2">
                    {t`Idioma atual`}: {currentLocale}
                </Text>
                <View className="flex-row gap-2">
                    {availableLocales.map(({code, name}) => (
                        <TouchableOpacity
                            key={code}
                            onPress={() => changeLocale(code)}
                            className={`p-2 rounded ${
                                currentLocale === code
                                    ? 'bg-blue-700'
                                    : 'bg-blue-500'
                            }`}
                        >
                            <Text className="text-white font-bold">{name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Lista de features */}
            <View className="bg-yellow-400 p-4 mb-4">
                <Text className="text-black font-bold mb-2">
                    {t`Este é um boilerplate configurado com:`}
                </Text>
                <Text className="text-black">{t`✨ Expo Router`}</Text>
                <Text className="text-black">{t`🎨 Fonte Quicksand`}</Text>
                <Text className="text-black">
                    {t`🧪 Jest + Testing Library`}
                </Text>
                <Text className="text-black">{t`📱 TypeScript`}</Text>
                <Text className="text-black">{t`🎯 ESLint`}</Text>
                <Text className="text-black">{t`🎨 NativeWind`}</Text>
                <Text className="text-black">{t`🌍 Lingui (i18n)`}</Text>
            </View>

            <Text className="text-text-primary font-sans text-lg text-center">
                {t`Lingui configurado e funcionando!`} 🌍
            </Text>
        </View>
    );
}
