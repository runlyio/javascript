module.exports = {
	plugins: [
		"import"
	],
	settings: {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".json", ".mjs"]
			}
		}
	},
	rules: {
		// don't import from files that don't exist
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
		"import/no-unresolved": "error",

		// don't import stuff you don't explicitly depend on
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		"import/no-extraneous-dependencies": "error",

		// don't import non-existent stuff out of a file
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
		"import/named": "error",

		// don't dereference non-existent stuff out of a file
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
		"import/namespace": "error",

		// don't import a default if no default is exported
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
		"import/default": "error",

		// no funny business with exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
		"import/export": "error",

		// don't do weird stuff with absolute file paths
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
		"import/no-absolute-path": "error",

		// don't dynamically require stuff
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
		"import/no-dynamic-require": "error",

		// don't do weird stuff with mutating exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
		"import/no-mutable-exports": "error",

		// just say no to require
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
		"import/no-commonjs": "error",

		// just say no to AMD
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
		"import/no-amd": "error",

		// first things first -> imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
		"import/first": "error",

		// just import a module once
		// http://eslint.org/docs/rules/no-duplicate-imports
		"no-duplicate-imports": "error",

		// we don't need no stinkin` extensions, except ya know, sometimes
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
		"import/extensions": ["error", "always", { "js": "never", "jsx": "never", "json": "never", "mjs": "never" }],

		// put some damn space between your code and your imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
		"import/newline-after-import": "error",

		// just import default without extra ceremony
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
		"import/no-named-default": "error"
	}
};
