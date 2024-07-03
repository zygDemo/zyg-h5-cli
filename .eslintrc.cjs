/* eslint-env node */
module.exports = {
  root: true,
  "vue/valid-template-root": "off",
  // 'no-console': process.env.NODE_ENV === 'production'? 'warn' : 'off',
  // 'no-debugger': process.env.NODE_ENV === 'production'? 'warn' : 'off',
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
