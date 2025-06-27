# Configuração do Lingui (i18n)

## Visão Geral

O Lingui está configurado para fornecer internacionalização (i18n) completa ao projeto de forma **simples e direta**. A configuração suporta português (padrão) e inglês usando macros para extração automática de texto.

## Estrutura

```
src/core/config/lingui/
├── index.ts           # Configuração principal do i18n
├── provider.tsx       # Provider React para wrappear a aplicação
├── hooks.ts           # Hooks personalizados para usar tradução
├── locales/
│   ├── pt/
│   │   └── messages.ts    # Mensagens em português
│   └── en/
│       └── messages.ts    # Mensagens em inglês
└── README.md         # Esta documentação
```

## Como Usar - Forma Simples ✨

### 1. Tradução Básica (Recomendado)

```tsx
import {t} from '@lingui/core/macro';

function MyComponent() {
    return (
        <Text>{t`Texto do cliente`}</Text>
    );
}
```

### 2. Trocar Idioma

```tsx
import {useLocale} from '@/core/config/lingui/hooks';

function LanguageSelector() {
    const {changeLocale, availableLocales, currentLocale} = useLocale();
    
    return (
        <View>
            {availableLocales.map(({code, name}) => (
                <TouchableOpacity 
                    key={code}
                    onPress={() => changeLocale(code)}
                >
                    <Text>{name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
```

### 3. Tradução com Variáveis

```tsx
import {t} from '@lingui/core/macro';

const userName = 'João';
<Text>{t`Bem-vindo, ${userName}!`}</Text>
```

### 4. Pluralização

```tsx
import {plural} from '@lingui/core/macro';

const count = 5;
<Text>
    {plural(count, {
        one: '# item',
        other: '# itens'
    })}
</Text>
```

## Scripts Disponíveis

### Extrair Mensagens
```bash
yarn i18n:extract
```
Escaneia o código e extrai todas as strings marcadas para tradução.

### Compilar Traduções
```bash
yarn i18n:compile
```
Compila as traduções para formato otimizado.

### Extrair e Compilar
```bash
yarn i18n:extract-compile
```
Executa ambos os comandos em sequência.

## Adicionando Novas Traduções

### 1. Adicionar nas Messages
Adicione a nova chave em ambos os arquivos:
- `src/core/config/lingui/locales/pt/messages.ts`
- `src/core/config/lingui/locales/en/messages.ts`

### 2. Usar no Código
```tsx
<Text>{t(msg\`nova.chave\`)}</Text>
```

### 3. Extrair e Compilar
```bash
yarn i18n:extract-compile
```

## Configuração Avançada

### Detectar Idioma do Sistema
```tsx
import {getLocales} from 'expo-localization';

const detectSystemLocale = (): LocaleType => {
    const systemLocales = getLocales();
    const systemLang = systemLocales[0]?.languageCode;
    
    return systemLang in locales ? systemLang as LocaleType : defaultLocale;
};
```

### Persistir Idioma Escolhido
```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';

export const changeLocale = async (locale: LocaleType): Promise<void> => {
    i18n.activate(locale);
    await AsyncStorage.setItem('user-locale', locale);
};
```

## Convenções de Nomenclatura

### Estrutura de Chaves
```
categoria.subcategoria.item
```

### Exemplos
```
// Navegação
nav.home
nav.settings
nav.back

// Telas
home.title
home.subtitle
settings.title

// Ações
common.save
common.cancel
common.delete

// Erros
error.network
error.validation
error.not_found.title
```

## Integração com Formulários

```tsx
import {msg} from '@lingui/macro';
import {useTranslation} from '@/core/config/lingui/hooks';

function LoginForm() {
    const {t} = useTranslation();
    
    return (
        <View>
            <TextInput 
                placeholder={t(msg\`form.email.placeholder\`)}
            />
            <TextInput 
                placeholder={t(msg\`form.password.placeholder\`)}
            />
        </View>
    );
}
```

## Dicas

1. **Use macros** (`msg`) sempre que possível - são mais performáticas
2. **Mantenha chaves organizadas** por contexto/tela
3. **Execute i18n:extract** regularmente para atualizar traduções
4. **Teste em ambos os idiomas** antes de fazer deploy
5. **Use pluralização** para contadores e listas

## Troubleshooting

### Macro não funciona
Certifique-se de que `babel-plugin-macros` está instalado e configurado no `babel.config.js`.

### Traduções não aparecem
1. Verifique se executou `yarn i18n:compile`
2. Confirme que a chave existe em ambos os idiomas
3. Reinicie o Metro bundler

### TypeScript reclama das chaves
As chaves são validadas em runtime. Use `msg` para validação compile-time quando possível. 