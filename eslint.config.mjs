import pluginJs from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';


export default [
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],
            'comma-dangle': ['error', 'never'],
            'semi': [
                'error',
                'always',
                {
                    omitLastInOneLineBlock: true,
                    omitLastInOneLineClassBody: true

                }
            ],
            'no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: false
                }
            ],
            'require-await': [
                'error'
            ],
            'indent': [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ]
        }
    }
];