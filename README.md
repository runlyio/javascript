# Runly Javascript Style Guide

> Shareable [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) configuration used in Runly javascript applications

## Usage

```
npm install @runly/eslint-config @runly/prettier-config prettier --save-dev
```

Add to your `.eslintrc.js`:

```js
module.exports = {
	extends: [
		"@runly"
	]
};
```

Add a `prettier` field to your `package.json` to use the shared prettier config:

```json
{
  "name": "my-cool-app",
  "version": "1.0.0",
  "prettier": "@runly/prettier-config"
}
```

The testing rules are not included by default and can be included via:

```js
module.exports = {
	extends: [
		"@runly/eslint-config/jest"
	]
};
```

## Editor Integration

You should be able to use your favorite editor's (\*cough\* [VS Code](https://code.visualstudio.com/)) [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and/or [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to easily format your code on save or with the [*Format* command](https://code.visualstudio.com/docs/editor/codebasics#_formatting).

## Contributing

When adding rules or plugins, put them into the correct js file based on category (e.g. add react rules to `react.js`). Make sure to add a small comment explaining what the rule does (feel free to be as snarky as possible) along with a link to the rule documentation.

### Versioning

When making changes, be sure to [follow semantic versioning](http://semver.org/).

* Any new _error_ rules you add should be a major version bump.
* Any more restrictive changes to existing _error_ rules should be a major version bump.
* Any easing of restrictions to existing _error_ rules can be a minor version bump.
* Any new fixable _error_ rules can be a minor version bump. 
* Any addition or changes to _warning_ rules should be a minor version bump.
* Any bug fixes should be a patch version bump.
* Anytime you realize you broke one of these rules, fixing it should be a patch version bump.
