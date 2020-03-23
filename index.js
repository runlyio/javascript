module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"@runly/eslint-config/imports",
		"@runly/eslint-config/style",
		"@runly/eslint-config/react",
		"prettier" // this should always be last
	]
};