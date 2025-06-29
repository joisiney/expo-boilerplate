import {canRemoveValues} from '.';

describe('application/utils - canRemoveValues', () => {
    it('deve retornar o mesmo objeto se can for false', () => {
        const obj = {a: 1, b: 2, c: 3};
        const valuesToRemove = [2];
        const result = canRemoveValues(obj, valuesToRemove, false);
        expect(result).toEqual(obj);
    });

    it('deve remover valores do objeto se can for true', () => {
        const obj = {a: 1, b: 2, c: 3};
        const valuesToRemove = [2];
        const result = canRemoveValues(obj, valuesToRemove, true);
        expect(result).toEqual({a: 1, c: 3});
    });

    it('deve lidar com valuesToRemove contendo null, undefined ou string vazia', () => {
        const obj = {a: null, b: undefined, c: '', d: 4};
        const valuesToRemove = [null, undefined, ''];
        const result = canRemoveValues(obj, valuesToRemove, true);
        expect(result).toEqual({d: 4});
    });

    it('deve retornar o mesmo objeto se valuesToRemove estiver vazio', () => {
        const obj = {a: 1, b: 2, c: 3};
        const valuesToRemove: any[] = [];
        const result = canRemoveValues(obj, valuesToRemove, true);
        expect(result).toEqual(obj);
    });

    it('deve retornar um objeto vazio se todos os valores forem removidos', () => {
        const obj = {a: 1, b: 2, c: 3};
        const valuesToRemove = [1, 2, 3];
        const result = canRemoveValues(obj, valuesToRemove, true);
        expect(result).toEqual({});
    });
});
