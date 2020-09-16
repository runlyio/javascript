module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"@runly/eslint-config/imports",
		"@runly/eslint-config/style",
		"@runly/eslint-config/react",

		// these 2 should be last
		"plugin:prettier/recommended",
		"prettier/react"
	]
};
