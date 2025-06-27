import React from 'react';

// Mock para o hook useLingui
export const useLingui = () => {
    return {
        i18n: {
            locale: 'pt-BR',
            activate: jest.fn(),
            load: jest.fn()
        }
    };
};

// Mock para o I18nProvider
export const I18nProvider = ({
    children
}: {
    i18n: any;
    children: React.ReactNode;
}) => {
    return React.createElement(React.Fragment, null, children);
};
