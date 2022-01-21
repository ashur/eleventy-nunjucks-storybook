module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/html",
  "webpackFinal": (config) => {
    config.module.rules.push({
        test: /\.njk$/,
        use: [
            {
                loader: 'simple-nunjucks-loader',
            }
        ]
    });

    // Return the altered config
    return config;
  }
}
