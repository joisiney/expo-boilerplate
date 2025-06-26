jest.mock('expo-router/ui', () => {
    const React = require('react');
    const { View } = require('react-native');
    
    return {
        Tabs: ({children, ...props}: any) => {
            return React.createElement(View, props, children);
        },
        TabList: ({children, ...props}: any) => {
            return React.createElement(View, props, children);
        },
        TabTrigger: ({children}: any) => children,
        TabSlot: ({children}: any) => children
    };
});

jest.mock('expo-router', () => {
    const actualExpoRouter = jest.requireActual('expo-router');
    const React = require('react');
    const { View } = require('react-native');
    
    const StackMock: any = jest.fn(({ children }: any) => {
        return React.createElement(View, {}, children);
    });
    
    StackMock.Screen = jest.fn(({ children }: any) => {
        return React.createElement(View, {}, children);
    });
    
    return {
        ...actualExpoRouter,
        useContextKey: () => 'some-fake-key',
        useId: () => 'mocked-id-123',
        Slot: jest.fn(),
        useLocalSearchParams: jest.fn().mockReturnValue({presentation: 'modal'}),
        router: {
            push: jest.fn(),
            replace: jest.fn(),
            dismiss: jest.fn(),
            dismissAll: jest.fn(),
            back: jest.fn(),
            canDismiss: jest.fn().mockReturnValue(true)
        },
        Redirect: jest.fn(() => null),
        SplashScreen: {
            hideAsync: jest.fn(),
            preventAutoHideAsync: jest.fn()
        },
        useSegments: jest.fn().mockReturnValue([]),
        useRouter: jest.fn().mockReturnValue({
            navigate: jest.fn(),
            push: jest.fn(),
            replace: jest.fn(),
            back: jest.fn(),
            canGoBack: jest.fn(),
            prefetch: jest.fn(),
            reload: jest.fn(),
            refresh: jest.fn(),
            beforePopState: jest.fn()
        }),
        useNavigation: jest.fn().mockReturnValue({
            navigate: jest.fn(),
            goBack: jest.fn(),
            setOptions: jest.fn(),
            getParent: jest.fn().mockReturnValue({
                setParams: jest.fn()
            })
        }),
        useFocusEffect: jest.fn(),
        usePathname: jest.fn(),
        Stack: StackMock
    };
});
