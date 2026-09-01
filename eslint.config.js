import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module', // Cambiado a module para evitar el error de import/export
            globals: {
                console: 'readonly', // Permitir el uso de console.log
                require: 'readonly',
                module: 'readonly',
                process: 'readonly',
                __dirname: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'error',
            'semi': ['error', 'always']
        }
    }
];