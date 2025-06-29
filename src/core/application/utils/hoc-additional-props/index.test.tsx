import {render, screen} from '@testing-library/react-native';
import {hocAdditionalProps} from '.';
import TextAtom from '@/atoms/text';

describe('application/utils: hocAdditionalProps', () => {
    it('deve injetar propriedades padrão no componente encapsulado', () => {
        const defaultProps = {children: 'my-value'};
        const EnhancedComponent = hocAdditionalProps(TextAtom, defaultProps);

        render(<EnhancedComponent />);
        const sut = screen.getByText('my-value');
        expect(sut).toBeTruthy();
    });

    it('deve permitir a substituição de propriedades padrão', () => {
        const defaultProps = {children: 'any-value'};
        const EnhancedComponent = hocAdditionalProps(TextAtom, defaultProps);

        render(<EnhancedComponent>my-value</EnhancedComponent>);
        const sut = screen.getByText('my-value');
        expect(sut).toBeTruthy();
    });
});
