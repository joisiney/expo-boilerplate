import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ButtonAtom} from './button.atom';

describe('ButtonAtom', () => {
    it('should render with string children', () => {
        render(
            <ButtonAtom testID="test-button" variant="default" size="default">
                Test Button
            </ButtonAtom>
        );

        expect(screen.getByTestId('test-button-atom')).toBeTruthy();
        expect(screen.getByText('Test Button')).toBeTruthy();
    });

    it('should render with ReactNode children', () => {
        const CustomComponent = () => <div>Custom Content</div>;

        render(
            <ButtonAtom testID="test-button" variant="default" size="default">
                <CustomComponent />
            </ButtonAtom>
        );

        expect(screen.getByTestId('test-button-atom')).toBeTruthy();
    });

    it('should render with loading state', () => {
        render(
            <ButtonAtom testID="test-button" loading={true}>
                Test Button
            </ButtonAtom>
        );

        expect(screen.getByTestId('test-button-atom')).toBeTruthy();
    });

    it('should render with disabled state', () => {
        render(
            <ButtonAtom testID="test-button" disabled={true}>
                Test Button
            </ButtonAtom>
        );

        expect(screen.getByTestId('test-button-atom')).toBeTruthy();
    });
});
