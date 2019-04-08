import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const dev = process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		name: 'app',
		sourcemap: !dev,
		format: 'iife',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
			emitCss: true,
			dev,
			css: css => {
				css.write('public/bundle.css');
			}
		}),
		resolve(),
		commonjs(),
		!dev && terser()
	]
};
