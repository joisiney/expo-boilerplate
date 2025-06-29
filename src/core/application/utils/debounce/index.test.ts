import {act, renderHook} from '@testing-library/react-native';
import {useEffectDebounce, useEventDebounce} from '.';

describe('application/utils: useEventDebounce', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    it('Deve chamar a função handle após o delay especificado', () => {
        const handle = jest.fn();
        const delay = 500;

        const {result} = renderHook(() => useEventDebounce(handle, delay));

        act(() => {
            result.current('teste');
        });

        expect(handle).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(delay);
        });

        expect(handle).toHaveBeenCalledTimes(1);
        expect(handle).toHaveBeenCalledWith('teste');
    });

    it('Deve cancelar chamadas anteriores dentro do delay e chamar apenas a última', () => {
        const handle = jest.fn();
        const delay = 500;

        const {result} = renderHook(() => useEventDebounce(handle, delay));

        act(() => {
            result.current('primeira');
            jest.advanceTimersByTime(200);
            result.current('segunda');
            jest.advanceTimersByTime(200);
            result.current('terceira');
        });

        expect(handle).not.toHaveBeenCalled();
        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(handle).toHaveBeenCalledTimes(1);
        expect(handle).toHaveBeenCalledWith('terceira');
    });

    it('Deve limpar o timeout ao chamar várias vezes e respeitar o delay da última chamada', () => {
        const handle = jest.fn();
        const delay = 500;

        const {result} = renderHook(() => useEventDebounce(handle, delay));

        act(() => {
            result.current('primeira');
        });

        act(() => {
            jest.advanceTimersByTime(300);
            result.current('segunda');
        });

        act(() => {
            jest.advanceTimersByTime(300);
        });

        expect(handle).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(200);
        });

        expect(handle).toHaveBeenCalledTimes(1);
        expect(handle).toHaveBeenCalledWith('segunda');
    });

    it('Deve funcionar com diferentes tipos de argumentos na função handle', () => {
        const handle = jest.fn(
            (_num: number, _text: string, _obj: {key: string}) => {}
        );
        const delay = 500;

        const {result} = renderHook(() => useEventDebounce(handle, delay));

        const args: [number, string, {key: string}] = [
            42,
            'teste',
            {key: 'valor'}
        ];

        act(() => {
            result.current(...args);
        });

        expect(handle).not.toHaveBeenCalled();

        act(() => {
            jest.advanceTimersByTime(delay);
        });

        expect(handle).toHaveBeenCalledTimes(1);
        expect(handle).toHaveBeenCalledWith(...args);
    });

    it('Deve executar imediatamente se o delay for 0', () => {
        const handle = jest.fn();
        const delay = 0;

        const {result} = renderHook(() => useEventDebounce(handle, delay));

        act(() => {
            result.current('teste');
        });

        expect(handle).toHaveBeenCalledTimes(1);
        expect(handle).toHaveBeenCalledWith('teste');
    });
    it('Deve executar a função mount após o atraso especificado', () => {
        const mount = jest.fn();
        const unmount = jest.fn();
        const delay = 1000;

        renderHook(() =>
            useEffectDebounce({
                mount,
                unmount,
                delay,
                deps: []
            })
        );

        expect(mount).not.toHaveBeenCalled();

        jest.advanceTimersByTime(delay);

        expect(mount).toHaveBeenCalledTimes(1);
        expect(unmount).not.toHaveBeenCalled();
    });

    it('Deve limpar o timeout e executar unmount ao desmontar', () => {
        const mount = jest.fn();
        const unmount = jest.fn();
        const delay = 1000;

        const {unmount: unmountHook} = renderHook(() =>
            useEffectDebounce({
                mount,
                unmount,
                delay,
                deps: []
            })
        );

        unmountHook();

        expect(unmount).toHaveBeenCalledTimes(1);
        expect(mount).not.toHaveBeenCalled();

        jest.advanceTimersByTime(delay);

        expect(mount).not.toHaveBeenCalled();
    });

    it('Deve reiniciar o timeout quando as dependências mudarem', () => {
        const mount = jest.fn();
        const unmount = jest.fn();
        const delay = 1000;
        let dep = 1;

        const {rerender} = renderHook(
            ({dep}) =>
                useEffectDebounce({
                    mount,
                    unmount,
                    delay,
                    deps: [dep]
                }),
            {initialProps: {dep}}
        );

        jest.advanceTimersByTime(delay / 2);

        dep = 2;
        rerender({dep});

        expect(mount).not.toHaveBeenCalled();

        jest.advanceTimersByTime(delay);

        expect(mount).toHaveBeenCalledTimes(1);
        expect(unmount).toHaveBeenCalledTimes(1);
    });

    test('Não deve executar mount se o componente for desmontado antes do atraso', () => {
        const mount = jest.fn();
        const unmount = jest.fn();
        const delay = 1000;

        const {unmount: unmountHook} = renderHook(() =>
            useEffectDebounce({
                mount,
                unmount,
                delay,
                deps: []
            })
        );

        jest.advanceTimersByTime(delay / 2);
        unmountHook();

        jest.advanceTimersByTime(delay);

        expect(mount).not.toHaveBeenCalled();
        expect(unmount).toHaveBeenCalledTimes(1);
    });
});
