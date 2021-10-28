module.exports = {
  extends: [
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': ['error', 'as-needed'],
    'semi': ['error', 'never'],
    'vue/sort-keys': ['error', 'asc', {
      'caseSensitive': true,
      'ignoreChildrenOf': ['model'],
      'ignoreGrandchildrenOf': ['computed', 'directives', 'inject', 'props', 'watch'],
      'minKeys': 2,
      'natural': false
}]
  }
}
