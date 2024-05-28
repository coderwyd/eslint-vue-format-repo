import { defineConfig, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist'],
    },
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno(), 
  ],
  theme: { 
  }, 
})
