import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['h-lg', 'text-6xl font-700'],
    ['h-md', 'text-3xl font-700'],
    ['h-sm', 'text-2xl font-700'],
    ['h-lt', 'text-5 font-700'],
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true
    }),
    presetAttributify(),
  ],
  theme: {
    colors: {
      logo: '#FF8729',
      bg: '#fafafd',
      pbg: '#f0f0f6',
    }
  }
})
