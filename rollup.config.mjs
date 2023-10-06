import {nodeResolve} from '@rollup/plugin-node-resolve';
import {dts} from 'rollup-plugin-dts';

export default [
	{
		input: 'src/index.ts',
		output: {
			file: 'cjs/index.js',
			format: 'cjs'
		},
		plugins: [
			nodeResolve()
		]
	},
	{
		input: 'src/index.ts',
		output: {
			file: 'esm/index.mjs',
			format: 'esm'
		},
		plugins: [
			nodeResolve()
		]
	},
	{
		input: 'node_modules/resedit/dist/index.d.ts',
		output: {
			file: 'dts/index.d.ts',
			format: 'es'
		},
		plugins: [
			dts({
				respectExternal: true
			})
		]
	}
];
