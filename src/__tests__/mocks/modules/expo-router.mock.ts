jest.mock('expo-router', () => {
    const StackComponent = (props: { children?: React.ReactNode }) => props.children;
    StackComponent.Screen = (props: { children?: React.ReactNode }) => props.children;
    
    return {
        useContextKey: () => 'some-fake-key',
        useId: () => 'mocked-id-123',
        Slot: jest.fn(),
        useLocalSearchParams: jest.fn().mockReturnValue({ presentation: 'modal' }),
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
        Stack: StackComponent
    };
}); 