export default defineConfig({
  base: '/',  // Si se despliega directamente en el dominio raíz
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

