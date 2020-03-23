module.exports = {
	extends: [
		"plugin:react/recommended"
	],
	plugins: [
		"react",
		"react-functional-set-state",
		"react-hooks",
		"jsx-a11y"
	],
	rules: {
		// we don't use propTypes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		"react/prop-types": ["off"],

		// this shit just don't work and doesn't really help IMO anyway...
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		"react/no-unescaped-entities": ["off"],

		// ERRORS

		// don't reference this.props or this.state from within a setState call,
		// what are you some kind of maniac?!?
		// https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b
		"react-functional-set-state/no-this-state-props": ["error"],

		// don't go creating all kinds of anonymous functions in render methods,
		// unless they're refs
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		"react/jsx-no-bind": ["error", { "ignoreRefs": true }],

		// don't write components like a n00b
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		"react/prefer-stateless-function": ["error"],

		// don't write components like a n00b
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		"react/prefer-es6-class": ["error", "always"],

		// put stuff in order
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
		"react/sort-comp": ["error"],

		// make missing collection key compile error rather than runtime error
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		"react/jsx-key": ["error"],

		// don't use bools like a n00b
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		"react/jsx-boolean-value": ["error", "never"],

		// don't waste half a day debugging because you decided to use an array index to key a list
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		"react/no-array-index-key": ["error"],

		// don't write invalid aria props
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
		"jsx-a11y/aria-props": ["error"],

		// don't write invalid aria proptypes
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
		"jsx-a11y/aria-proptypes": ["error"],

		// don't write invalid aria roles
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
		"jsx-a11y/aria-role": ["error"],

		// don't put aria on shit that don't want it
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
		"jsx-a11y/aria-unsupported-elements": ["error"],

		// you best be putting aria props on 'dem aria roles
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
		"jsx-a11y/role-has-required-aria-props": ["error"],

		// don't put invalid aria props on aria roles
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
		"jsx-a11y/role-supports-aria-props": ["error"],

		// =======================================================================================
		// WARNINGS

		// make sure those keyboard people are happy
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
		"jsx-a11y/mouse-events-have-key-events": ["warn"],

		// make sure those keyboard people are happy
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
		"jsx-a11y/click-events-have-key-events": ["warn"],

		// https://reactjs.org/docs/hooks-rules.html
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps":"error"
	}
};