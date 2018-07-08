module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [ "eslint:recommended", "plugin:react/recommended" ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "react/prop-types": "off",
        "jsx-a11y/alt-text": "off",
        "react/display-name": "off",
    }
};