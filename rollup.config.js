const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
  input: 'src/index.tsx', // Change to .tsx
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      outDir: 'dist',
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
      jsx: 'react-jsx'
    })
  ],
  external: ['react', 'react-dom']
};