module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',

  arrowParens: 'avoid',
  bracketSpacing: false,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
  ],
}
