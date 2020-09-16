module.exports = {
	plugins: [
		"filenames",
		"prettier"
	],
	rules: {
		// ERRORS

		// enforce lowercase kebab case for filenames
		// we have had issues in the past with case sensitivity & module resolution
		// https://github.com/selaux/eslint-plugin-filenames
		"filenames/match-regex": ["error", "^[a-z0-9\-\.]+$"],

		// don't concatenate strings like a n00b
		// http://eslint.org/docs/rules/prefer-template
		"prefer-template": ["error"],

		// put a space after the comment slashes
		// http://eslint.org/docs/rules/spaced-comment
		"spaced-comment": ["error", "always"],

		// force curly braces for control-flow blocks unless it is single line
		// http://eslint.org/docs/rules/curly
		"curly": ["error", "multi-line", "consistent"],

		// =======================================================================================
		// WARNINGS

		// don't write a whole application in one single js file (default 301 lines is too big)
		// http://eslint.org/docs/rules/max-lines
		"max-lines": ["warn"],

		// don't make ridiculous functions that take billions upon billions of arguments
		// http://eslint.org/docs/rules/max-params
		"max-params": ["warn", { max: 4 }]
	}
};