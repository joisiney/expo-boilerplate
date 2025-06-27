import {readdirSync} from 'fs';
import {join} from 'path';

function requireContext(
    directory: string,
    _useSubdirectories: boolean = false,
    regExp: RegExp = /\.mock\.(ts|js)$/
): void {
    const modulesPath = join(__dirname, directory);

    try {
        const files = readdirSync(modulesPath);

        files.forEach((file) => {
            if (regExp.test(file)) {
                try {
                    require(join(modulesPath, file));
                } catch (error) {
                    console.warn(`❌ Erro ao carregar mock ${file}:`, error);
                }
            }
        });
    } catch (error) {
        console.warn(`Erro ao acessar diretório ${directory}:`, error);
    }
}

requireContext('../mocks/modules', false, /\.mock\.(ts|js)$/);
