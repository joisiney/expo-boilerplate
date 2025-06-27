// Mock para o macro t do Lingui
export const t = (strings: TemplateStringsArray, ...values: any[]): string => {
    // Simples interpolação de strings para testes
    let result = strings[0];
    for (let i = 0; i < values.length; i++) {
        result += values[i] + strings[i + 1];
    }
    return result;
};
