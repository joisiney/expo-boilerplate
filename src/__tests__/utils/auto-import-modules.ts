// Auto-import de todos os mocks da pasta modules
// Esta abordagem permite adicionar novos mocks sem modificar manualmente este arquivo

import { readdirSync } from 'fs';
import { join } from 'path';

// Função para simular require.context do webpack
function requireContext(directory: string, useSubdirectories: boolean = false, regExp: RegExp = /\.mock\.(ts|js)$/): void {
  const modulesPath = join(__dirname, directory);
  
  try {
    const files = readdirSync(modulesPath);
    
    files.forEach((file) => {
      if (regExp.test(file)) {
        try {
          // Importar dinamicamente cada mock
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

// Carregar todos os arquivos .mock.ts/.mock.js da pasta modules
requireContext('../mocks/modules', false, /\.mock\.(ts|js)$/);

// Para adicionar um novo mock, simplesmente crie um arquivo .mock.ts na pasta modules/
// Exemplo: src/__tests__/mocks/modules/meu-novo-modulo.mock.ts