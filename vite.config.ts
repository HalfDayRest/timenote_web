import { defineConfig } from 'vite'
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig({
  base: '',
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 100,
          propList: ['*'],
          unitPrecision: 5,
          replace: true,
          mediaQuery: false,
        }),
      ],
    },
  },
})
