// https://github.com/jest-community/eslint-plugin-jest

module.exports = {
	env: {
		jest: true
	},
	plugins: [
		"jest"
	],
	extends: [
		"plugin:jest/recommended",
		"plugin:jest/style"
	]
};
