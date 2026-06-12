import typescript from '@rollup/plugin-typescript';
import externals from 'rollup-plugin-node-externals';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

const tsPluginOptions = {
  compilerOptions: {
    outDir: './lib',
  },
};

export default [
  {
    plugins: [
      typescript(tsPluginOptions),
      externals({
        deps: true,
      }),
      commonjs(),
    ],
    input: './src/index.ts',
    output: [
      {
        file: './lib/index.cjs',
        format: 'cjs',
      },
    ],
  },
  {
    plugins: [
      typescript(tsPluginOptions),
      externals({
        deps: true,
      }),
    ],
    input: './src/index.ts',
    output: [
      {
        file: './lib/index.mjs',
        format: 'es',
      },
    ],
  },
  {
    plugins: [
      typescript(tsPluginOptions),
      dts({
        compilerOptions: {
          removeComments: false,
        },
      }),
      externals({
        deps: true,
      }),
    ],
    input: './src/index.ts',
    output: {
      file: './lib/index.d.ts',
      format: 'es',
    },
  },
]
