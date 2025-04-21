import { eslintConfig } from 'tether-dev-docs'

export default [
  ...eslintConfig,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          ...eslintConfig[0].rules['prettier/prettier'][1],
          plugins: ['prettier-plugin-tailwindcss']
        }
      ]
    }
  }
]
