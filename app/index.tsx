import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {t} from '@lingui/core/macro';
import {ThemeToggle} from '@/atoms/theme-toggle';
import {useLocale} from '@/core/config/lingui/hooks';
import {ThemedView} from '@/core/config/theme';

export default function Index() {
    const {changeLocale, availableLocales, currentLocale} = useLocale();

    return (
        <ThemedView className="flex-1 bg-background-primary dark:bg-dark-background-primary">
            <ScrollView className="flex-1 p-5">
                {/* Header com título */}
                <View className="items-center mt-10 mb-6 bg-primary-500 p-6 rounded-xl">
                    <Text className="text-white text-3xl font-bold text-center">
                        {t`Expo Boilerplate`}
                    </Text>
                    <Text className="text-white text-base text-center mt-2 opacity-90">
                        {t`Um ponto de partida para seus projetos`}
                    </Text>
                </View>

                {/* Controle de Tema */}
                <View className="mb-6">
                    <Text className="font-bold text-lg mb-3 text-text-primary dark:text-dark-text-primary">
                        {t`Controle de Tema`}
                    </Text>
                    <ThemeToggle />
                </View>

                {/* Controle de Idioma */}
                <View className="p-4 mb-6 rounded-xl border bg-surface-secondary dark:bg-dark-surface-secondary border-border-light dark:border-dark-border-light">
                    <Text className="font-bold text-lg mb-3 text-text-primary dark:text-dark-text-primary">
                        {t`Idioma atual`}: {currentLocale}
                    </Text>
                    <View className="flex-row gap-2 flex-wrap">
                        {availableLocales.map(({code, name}) => (
                            <TouchableOpacity
                                key={code}
                                onPress={() => changeLocale(code)}
                                className={`p-3 rounded-lg border ${
                                    currentLocale === code
                                        ? 'bg-primary-500 border-primary-600'
                                        : 'bg-surface-primary dark:bg-dark-surface-primary border-border-medium dark:border-dark-border-medium'
                                }`}
                            >
                                <Text
                                    className={`font-medium ${
                                        currentLocale === code
                                            ? 'text-white'
                                            : 'text-text-primary dark:text-dark-text-primary'
                                    }`}
                                >
                                    {name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Lista de Features */}
                <View className="p-4 mb-6 rounded-xl border bg-surface-secondary dark:bg-dark-surface-secondary border-border-light dark:border-dark-border-light">
                    <Text className="font-bold text-lg mb-3 text-text-primary dark:text-dark-text-primary">
                        {t`Este boilerplate inclui:`}
                    </Text>
                    <View className="space-y-2">
                        <Text className="text-text-secondary dark:text-dark-text-secondary">
                            {t`✨ Expo Router`}
                        </Text>
                        <Text className="text-text-secondary dark:text-dark-text-secondary">
                            {t`🎨 Fonte Quicksand`}
                        </Text>
                        <Text className="text-text-secondary dark:text-dark-text-secondary">
                            {t`🧪 Jest + Testing Library`}
                        </Text>
                        <Text className="text-text-secondary dark:text-dark-text-secondary">
                            {t`📱 TypeScript`}
                        </Text>
                        <Text className="text-text-secondary dark:text-dark-text-secondary">
                            {t`🎯 ESLint + Prettier`}
                        </Text>
                        <Text className="text-text-secondary dark:text-dark-text-secondary">
                            {t`🎨 NativeWind (Tailwind CSS)`}
                        </Text>
                        <Text className="text-text-secondary dark:text-dark-text-secondary">
                            {t`🌍 Lingui (i18n)`}
                        </Text>
                        <Text className="text-text-secondary dark:text-dark-text-secondary">
                            {t`🌙 Sistema de Temas (Light/Dark)`}
                        </Text>
                    </View>
                </View>

                {/* Footer */}
                <View className="items-center py-6">
                    <Text className="font-sans text-lg text-center text-text-primary dark:text-dark-text-primary">
                        {t`Tudo configurado e funcionando!`} 🎉
                    </Text>
                    <Text className="text-sm text-center mt-2 text-text-tertiary dark:text-dark-text-tertiary">
                        {t`Pronto para desenvolvimento`}
                    </Text>
                </View>
            </ScrollView>
        </ThemedView>
    );
}
