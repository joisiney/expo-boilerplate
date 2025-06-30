import {TouchableOpacity} from 'react-native';
import {t} from '@lingui/core/macro';
import {Link, Stack} from 'expo-router';
import TextAtom from '@/atoms/text';
import {ThemedView} from '@/core/config/theme';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: t`Oops!`}} />
            <ThemedView className="flex-1 items-center justify-center p-5 bg-background-primary dark:bg-dark-background-primary">
                <TextAtom className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
                    {t`Esta página não existe.`}
                </TextAtom>

                <Link href="/" asChild>
                    <TouchableOpacity className="mt-4 py-4 px-6 bg-primary-500 rounded-lg">
                        <TextAtom className="text-white font-medium text-base">
                            {t`Voltar para a tela inicial`}
                        </TextAtom>
                    </TouchableOpacity>
                </Link>
            </ThemedView>
        </>
    );
}
