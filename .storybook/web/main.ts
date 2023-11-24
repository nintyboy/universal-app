// module.exports = {
//   stories: [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)",
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-react-native-web",
//   ],
//   core: {
//     builder: "webpack5",
//   },
//   framework: "@storybook/react",
// };
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import path from "path";

module.exports = {
  stories: [
    "../../src/ui/components/**/*.stories.mdx",
    "../../src/ui/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",

  webpackFinal: async (config, { configType }) => {
    if (!config.resolve) {
      return config;
    }
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../../node_modules"),
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native$": "react-native-web",
      "@": path.resolve(__dirname, "../../src"),
    };

    return config;
  },
};
